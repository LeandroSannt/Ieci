import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AcademicData extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public graduation: string

  @column()
  public year_graduated: string

  @column()
  public institution_graduated: string

  @column()
  public expiration: DateTime

  @column()
  public number_months: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
