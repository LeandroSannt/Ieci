 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {ImportExcelService} from '../../Services/ImportExcelService'

export default class ImportExcelDataController {
  public async import({response,request}:HttpContextContract){
    const academics = new ImportExcelService()

    const excel = request.file('excel')

    const result = await academics.import(excel)

    response.ok(result)
  }
}
