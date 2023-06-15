 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CourseService } from 'App/Services/CourseServices'
import CourseValidator from 'App/Validators/CreateCourseValidator'


export default class CoursesController {
  public async index({response,request}:HttpContextContract){
    const course = new CourseService()
    const {category_id,title,order} = request.only(['category_id','title','order'])

    const result = await course.index(category_id,title,order)

    response.ok(result)
  }

  public async store({response,request,auth}:HttpContextContract){
    const course = new CourseService()

    const data = await request.validate(CourseValidator)

    const currentUser = auth.user
    if(currentUser){
      const result = await course.store(data)
      return result
    }

  }

  public async show({response,params}:HttpContextContract){
    const course = new CourseService()
    const { id } = params

    const result = await course.show(id)

    return response.ok(result)
  }

  public async update({response,request,params}:HttpContextContract){
    const course = new CourseService()
    const { id } = params

    const data = request.only(['title','category_id'])

    const result = await course.update(data,id)
    response.created(result)
  }
}
