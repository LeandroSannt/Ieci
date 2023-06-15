import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import { UserService } from '../../Services/UserServices'

export default class UsersController {

  public async index({response}:HttpContextContract){
    const users = new UserService()

    const result = await users.index()

    response.ok(result)
  }

  public async updatePassword({response,request,auth}:HttpContextContract){
    const users = new UserService()
    const {email,actualPassword,newPassword,repeatPassword} = request.only(['email','actualPassword','newPassword','repeatPassword'])

    const result = await users.updatePassword({email,actualPassword,newPassword,repeatPassword},auth,response)

    return result
  }

  public async userCourses({response, params}:HttpContextContract){
    const users = new UserService()

    const {id} = params

    const result = await users.userCourses(id)

    response.ok(result)

  }

  public async getUser({response,params}:HttpContextContract){
    const users = new UserService()

    const {id} = params

    const result = await users.getUser(id)

    response.ok(result)
  }

  public async store({response,request}:HttpContextContract){
    const users = new UserService()

    const data = await request.validate(CreateUserValidator)

    const result = await users.store(data,response)

    return result
  }

}
