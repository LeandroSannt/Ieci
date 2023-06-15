import Database from '@ioc:Adonis/Lucid/Database'
import Course from 'App/Models/Course'

interface CourseProps{
  title:string
  category_id:number
}

class CourseService {
  async index(category_id:number,title:string,  order: 'asc' | 'desc') {
    const courses = await Course
    .query()
    .preload('category')
    .preload('subject')
    .where('category_id',category_id)
    .where((query) =>{
      if(title){
        query.where('title', 'like',`%${title}%`)
      }
    })
    .orderBy("id",`${order}`)

    return courses
  }

  async store({title,category_id}:CourseProps) {
    const course = await Course.create({
      title,
      category_id,
    })

    await course.save()

    return course
  }

  async show(id:string) {
    const totalHours = await Database
    .query()
    .from('courses')
    .innerJoin('subjects', 'subjects.course_id', '=', 'courses.id')
    .sum('subjects.course_load as totalHours')
    .where('courses.id',id)
    .first()

    let course = await Course.find(id)

    const courseTotalHoursCourse = {...course?.toJSON(),...totalHours,priceSubscription:200}

    return courseTotalHoursCourse
  }

  async update({title,category_id}:CourseProps, id:string) {
    const course = await Course.find(id)

    if(course){
      course.title = title
      course.category_id = category_id

      await course.save()
    }

    return course
  }
}

export { CourseService }


