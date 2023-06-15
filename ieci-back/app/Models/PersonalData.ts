import { DateTime } from 'luxon'
import { BaseModel, column  } from '@ioc:Adonis/Lucid/Orm'

export default class PersonalData extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public course: string

  @column()
  public email: string

  @column()
  public cpf: string

  @column()
  public rg: string

  @column()
  public dispatcher: string

  @column()
  public birth_date: DateTime

  @column()
  public gender: string

  @column()
  public father_name: string

  @column()
  public mother_name: string

  @column()
  public birth_city: string

  @column()
  public nacionality: string

  @column()
  public phone_number: string

  @column()
  public cell_number: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
