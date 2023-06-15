import { BaseModel, belongsTo, BelongsTo, column, scope } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

import AcademicData from '../Models/AcademicData'
import Address from '../Models/Address'
import Course from '../Models/Course'
import PersonalData from '../Models/PersonalData'
import User from '../Models/User'

export default class PaidCourse extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public time: Date

  @column()
  public course: string

  @column()
  public status: string

  @column()
  public cpf: string

  @column()
  public user_id: number

  @column()
  public course_id: number

  @column()
  public personal_data_id: number

  @column()
  public address_id: number

  @column()
  public academic_data_id: number

  @belongsTo(() => User,{foreignKey:"user_id"})
  public paidUser: BelongsTo<typeof User>

  @belongsTo(() => PersonalData,{foreignKey:"personal_data_id"})
  public paidPersonalData: BelongsTo<typeof PersonalData>

  @belongsTo(() => AcademicData,{foreignKey:"academic_data_id"})
  public paidAcademicData: BelongsTo<typeof AcademicData>

  @belongsTo(() => Address,{foreignKey:"address_id"})
  public paidAddress: BelongsTo<typeof Address>

  @belongsTo(() => Course,{foreignKey:"course_id"})
  public paidCourse: BelongsTo<typeof Course>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static findCourseUser = scope((query,id, user: User) => {
     query
     .where('course_id',id)
     .where("user_id",user.id)
  })
}
