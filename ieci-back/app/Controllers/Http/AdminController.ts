 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AdminServices } from 'App/Services/AdminServices'

export default class AdminController {
  public async index({response,request}:HttpContextContract){
    const adminService = new AdminServices()

    const {status,order} = request.only(['status','order'])

    const listUsers = await adminService.getUsers(status,order)

    response.ok(listUsers)
  }

  public async show({response,params}:HttpContextContract){
    const adminService = new AdminServices()

    const {id} = params

    const user = await adminService.getUser(id)

    response.ok(user)
  }


}
