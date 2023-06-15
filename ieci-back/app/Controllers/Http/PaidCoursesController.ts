import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PaidCourseServices } from '../../Services/PaidCourseServices'


export default class PaidCoursesController {

  public async getPaidUserCourse({params,response,auth}:HttpContextContract){
    const paid = new PaidCourseServices()
    const currentUser = auth.user
    const {id} = params

    if(currentUser){
      const result = await paid.getPaidUserCourse(id,currentUser)
      return response.ok(result)
    }

  }

  public async store({params,response,request,auth}:HttpContextContract){
    const paid = new PaidCourseServices()
    const data = request.only(['email','time','course','name','course_id','cpf'])
    const currentUser = auth.user

    const {id} = params

    const result = await paid.store(data,currentUser,response,id)

    return result
  }

  public async update({params,response,request}:HttpContextContract){
    const paid = new PaidCourseServices()
    const {id} = params

    const {status} = request.only(['status'])

    const result = await paid.update(id,status)

    response.ok(result)


  }
}
