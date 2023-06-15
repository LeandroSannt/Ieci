import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PersonalData extends BaseSchema {
  protected tableName = 'personal_data'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("name").notNullable()
      table.string("course").notNullable()
      table.string("email").notNullable()
      table.string("cpf").notNullable()
      table.string("rg").notNullable()
      table.string("dispatcher").notNullable()
      table.dateTime("birth_date").notNullable()
      table.string("gender").notNullable()
      table.string("father_name").notNullable()
      table.string("mother_name").notNullable()
      table.string("birth_city").notNullable()
      table.string("nacionality").notNullable()
      table.string("phone_number").notNullable()
      table.string("cell_number").notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
