import PaidCourse from 'App/Models/PaidCourse'

import AcademicData from '../Models/AcademicData'
import User from '../Models/User'
import { SendEmail } from './SendEmailService'

interface AcademicDataServiceProps{
  graduation:string
  year_graduated:string
  institution_graduated:string
  expiration:any
  number_months:number
}

class AcademicDataService{

  async index() {
    const academicData = await AcademicData.all()
    return academicData
  }

  async store({
    graduation,
    year_graduated,
    institution_graduated,
    expiration,
    number_months
  }:AcademicDataServiceProps , currentUser:User | undefined, id:number) {

    const sendEmail = new SendEmail()

    const academicData = await AcademicData.create({
      graduation,
      year_graduated,
      institution_graduated,
      expiration,
      number_months
    })

    //validação para não criar outro endereço para o curso caso eu ja tenha um curso

    if(currentUser){

      const courseUser = await PaidCourse
      .query()
      .where('course_id',id)
      .where("user_id",currentUser.id)
      .preload('paidPersonalData')
      .first()

      if(courseUser){
        courseUser.academic_data_id = academicData.id
        courseUser.status = 'Pendente'
        courseUser.save()
      }

      try{
        await sendEmail.email({
          from:"lsn_slim@yahoo.com.br",
          to:'lsn_slim@yahoo.com.br',
          subject:"Confirmação de formulario",
          htmlView:{view:"confirmationform",props:{name:currentUser.name}}
        })

        // if(admin){
          await sendEmail.email({
            from:"lsn_slim@yahoo.com.br",
            to:'lsn_slim@yahoo.com.br',
            subject:"Confirmação de formulario",
            htmlView:{view:"form_admin",props:{courseUser}}
          })
        // }

        return courseUser

      }catch(err){

        console.log(err)

    }

    }

    return academicData

  }

}

export { AcademicDataService }


