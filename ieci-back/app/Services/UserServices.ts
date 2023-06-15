import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import { ResponseContract } from '@ioc:Adonis/Core/Response'
import User from '../Models/User'

interface UserProps{
  email:string
  password:string
  name:string
}

interface IUpdatePassword{
  email:string
  actualPassword:string
  newPassword:string
  repeatPassword:string
}

class UserService {

  async index() {
    const users = await User
    .query()

    return users
  }

  async updatePassword({email,actualPassword,newPassword,repeatPassword}:IUpdatePassword, auth: AuthContract,response: ResponseContract){

    const currentUser = auth.user
    if(currentUser){
      const confirmIdentity =  await auth.use('api').verifyCredentials(currentUser?.email, actualPassword)

      if(confirmIdentity){
        if(newPassword !== repeatPassword){
          return response.forbidden('A senha e repetição de senha devem ser iguais')
        }
         //atualizar o usuario
          currentUser.email = email
          currentUser.password = newPassword

          const user =  await currentUser.save()
          return user
      }

    }
  }

  async userCourses(id:number){
    const userCourses = await User
    .query()
    .preload('userCourses', (query) =>{
      query.preload('paidCourse', (queryCourse) =>{
        queryCourse.preload('subject')
        queryCourse.preload('category')
        queryCourse.withAggregate('subject', (count) =>{
          count.sum('course_load').as('countTotal')
        })
      })
    })
    .where('id',id)
    .first()

    userCourses?.userCourses.forEach(async(u) =>{
      const {countTotal} = u.paidCourse.$extras
      u.paidCourse.total_sum = countTotal

    })


    return userCourses

  }

  async getUser(id:number){
    const user = await User.find(id)
    return user
  }

  async store({name,email,password}:UserProps, response: ResponseContract) {

    const exists = await User.findBy('email',email)

    if(exists){
     return response.forbidden("Email ja cadastrado")
    }

    const user = await User.create({
      name,
      email,
      password
    })

    return user
  }
}

export { UserService }


