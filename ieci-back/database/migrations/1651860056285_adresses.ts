import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Adresses extends BaseSchema {
  protected tableName = 'adresses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("cep").notNullable()
      table.string("city").notNullable()
      table.string("street").notNullable()
      table.string("state").notNullable()
      table.string("district").notNullable()
      table.integer("adress_number").notNullable()
      table.string("complement")

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
