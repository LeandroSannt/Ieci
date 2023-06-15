import PersonalData from '../Models/PersonalData'
import User from '../Models/User'
import PaidCourse from '../Models/PaidCourse'
import { ResponseContract } from '@ioc:Adonis/Core/Response';


interface PersonalDataProps{
  name:string
  course:string
  email:string
  cpf:string
  rg:string
  dispatcher:string
  birth_date:any
  gender:string
  father_name:string
  mother_name:string
  birth_city:string
  nacionality:string
  phone_number:string
  cell_number:string
}

class PersonalDataService{

  async index() {
    const personalData = await PersonalData.all()
    return personalData
  }

  async store({
    name,
    course,
    email,
    cpf,
    rg,
    dispatcher,
    birth_date,
    gender,
    father_name,
    mother_name,
    birth_city,
    nacionality,
    phone_number,
    cell_number,
  }:PersonalDataProps , currentUser:User | undefined ,response:ResponseContract, id:number) {
    const courseUser = await PaidCourse
    .query()
    .withScopes((scope) =>scope.findCourseUser(id,currentUser))
    .first()

    if(!courseUser){
      return response.unauthorized({error:'You already bought this course'})
    }

    const personalData = await PersonalData.create({
      name,
      course,
      email,
      cpf,
      rg,
      dispatcher,
      birth_date,
      gender,
      father_name,
      mother_name,
      birth_city,
      nacionality,
      phone_number,
      cell_number,
    })

    if(currentUser){
      if(courseUser){
        courseUser.personal_data_id = personalData.id
        courseUser.save()
      }
    }

    return personalData
  }

}

export {PersonalDataService}


