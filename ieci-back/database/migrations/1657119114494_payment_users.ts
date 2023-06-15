import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PaymentUsers extends BaseSchema {
  protected tableName = 'paid_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('paid_course_id').unsigned().references('id').inTable('paid_courses')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
