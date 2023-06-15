 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {PersonalDataService} from '../../Services/PersonalDataServices'
import CreatePersonalDataValidator from 'App/Validators/CreatePersonalDataValidator'


export default class PersonalDataController {
  public async index({response}:HttpContextContract){
    const users = new PersonalDataService()

    const result = await users.index()

    response.ok(result)
  }

  public async storePersonalData({params,request, response,auth}:HttpContextContract){
    const users = new PersonalDataService()

    const {id} = params

    const data = await request.validate(CreatePersonalDataValidator)

    const currentUser = auth.user

    const result = await users.store(data,currentUser,response,id)

    return result
  }

}
