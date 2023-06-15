import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PaidCourses extends BaseSchema {
  protected tableName = 'paid_courses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

       table.string("name")
       table.string("email")
       table.timestamp("time")
       table.string("course")
       table.string("status")
       table.string("cpf")

       table.integer('user_id').unsigned().references('id').inTable('users')
       table.integer('course_id').unsigned().references('id').inTable('courses')
       table.integer('academic_data_id').unsigned().references('id').inTable('academic_data')
       table.integer('address_id').unsigned().references('id').inTable('adresses')
       table.integer('personal_data_id').unsigned().references('id').inTable('personal_data')


      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
