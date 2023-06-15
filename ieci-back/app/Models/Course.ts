import { BaseModel, belongsTo, BelongsTo, column, hasMany, HasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Category from 'App/Models/Category'
import Subject from 'App/Models/Subject'
import { DateTime } from 'luxon'

import User from './User'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public category_id: number

  @column()
  public total_sum?: number



  @manyToMany(() => User, {
    // pivotTable: 'user_courses'
    relatedKey: 'id',
    pivotTable: 'user_courses',
    pivotColumns:['user_id','academic_data_id']
  })
  public userCourses: ManyToMany<typeof User>


  @belongsTo(() => Category,{foreignKey:"category_id"})
  public category: BelongsTo<typeof Category>

  @hasMany(() => Subject,{foreignKey:"course_id"})
  public subject: HasMany<typeof Subject>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
