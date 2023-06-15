 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
 import { CategoryService } from 'App/Services/CategoryServices'

export default class CategoriesController {

  public async index({response}:HttpContextContract){
    const category = new CategoryService()
    const result = await category.index()

    response.ok(result)
  }

  public async store({response,request}:HttpContextContract){
    const category = new CategoryService()

    const coverImage = request.file('emblem')
    const name = request.input('name')

    const result = await category.store(name,coverImage)

    response.ok(result)
  }

  public async show({response,params}:HttpContextContract){
    const category = new CategoryService()
    const { id } = params

    const result = await category.show(id)

    return response.ok(result)
  }

  public async update({response,request,params}:HttpContextContract){
    const category = new CategoryService()
    const { id } = params

    const data = request.only([
      'name',
      'emblem'
    ])

    const result = await category.update(data,id)
    response.created(result)
  }

}
