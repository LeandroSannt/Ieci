import { ResponseContract } from '@ioc:Adonis/Core/Response';

import PaidCourse from '../Models/PaidCourse';
import PaidUser from '../Models/PaidUser';
import User from '../Models/User';
import { SendEmail } from './SendEmailService';

interface PaidCourseProps{
  name:string
  email:string
  time:Date
  course:string
  course_id:number
  cpf:string
}

class PaidCourseServices{

  async getPaidUserCourse(id:number,currentUser:User){
    const courseUser = await PaidCourse
    .query()
    .withScopes((scope) =>scope.findCourseUser(id,currentUser))
    .first()

    return courseUser?.toJSON()
  }

  async store({
    name,
    email,
    time,
    cpf
  }:PaidCourseProps , currentUser:User | undefined,response:ResponseContract, id:number) {

    const sendEmail = new SendEmail()

    const courseUser = await PaidCourse
    .query()
    .withScopes((scope) =>scope.findCourseUser(id,currentUser))
    .preload('paidPersonalData')
    .first()

    if(courseUser){
      return response.unauthorized({error:'Buy a course to fill in the form'})
    }


    const paidCourse = await PaidCourse.create({
      name,
      email,
      time,
      status:'Matriculado',
      user_id:currentUser?.id,
      course_id:id
    })

    await PaidUser.create({
      user_id:paidCourse.user_id,
      paid_course_id:paidCourse.id
    })

    await sendEmail.email({
      from:"lsn_slim@yahoo.com.br",
      to:email,
      subject:"Confirmação de matricula",
      htmlView:{view:"confirm_matricula",props:paidCourse.toJSON()}
    })

    const findedCourse = await PaidCourse
    .query()
    .withScopes((scope) =>scope.findCourseUser(id,currentUser))
    .preload('paidPersonalData')
    .first()

    await sendEmail.email({
      from:"lsn_slim@yahoo.com.br",
      to:'lsn_slim@yahoo.com.br',
      subject:"Confirmação de formulario",
      htmlView:{view:"confirm_admin",props:{findedCourse}}
    })

    return findedCourse

  }

  async update(id:number,status:string){

    const paidCourse = await PaidCourse.find(id)

    if(paidCourse){
      paidCourse.status = status

      await paidCourse.save()
    }

  }
}

export { PaidCourseServices };


