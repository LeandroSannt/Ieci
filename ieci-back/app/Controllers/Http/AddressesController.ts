 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {AdressServices} from '../../Services/AddresseServices'
import CreateAddressValidator from 'App/Validators/CreateAddressValidator'



export default class AddressController {
  public async index({response}:HttpContextContract){
    const address = new AdressServices()
    const result = await address.index()

    response.ok(result)
  }

  public async storeAddressCourse({params,response,request, auth}:HttpContextContract){
    const address = new AdressServices()

    const data = await request.validate(CreateAddressValidator)
    const {id} = params

    const currentUser = auth.user
    const result = await address.storeAddressCourse(data,currentUser,response,id)

    return result
  }

}
