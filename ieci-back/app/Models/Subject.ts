import { DateTime } from 'luxon'
import Course from 'App/Models/Course'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'

export default class Subject extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public course_id: number

  @column()
  public course_load: number

  @column()
  public description: string

  @belongsTo(() => Course,{foreignKey:"course_id"})
  public course: BelongsTo<typeof Course>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
