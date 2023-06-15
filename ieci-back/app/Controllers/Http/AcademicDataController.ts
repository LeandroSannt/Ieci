 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateAcademicDataValidator from 'App/Validators/CreateAcademicDataValidator'
import { AcademicDataService } from '../../Services/AcademicDataServices'



export default class AcademicDataController {
  public async index({response}:HttpContextContract){
    const academics = new AcademicDataService()

    const result = await academics.index()

    response.ok(result)
  }

  public async storeAcademicDataCourse({request,params, auth}:HttpContextContract){
    const academics = new AcademicDataService()

    const data = await request.validate(CreateAcademicDataValidator)

    const currentUser = auth.user

    const { id } = params

    const result = await academics.store(data,currentUser,id)

    return result
  }

}
