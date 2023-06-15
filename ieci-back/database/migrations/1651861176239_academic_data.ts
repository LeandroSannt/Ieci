import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AcademicData extends BaseSchema {
  protected tableName = 'academic_data'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string("graduation")
      table.string("year_graduated")
      table.string("institution_graduated")
      table.datetime("expiration")
      table.integer("number_months")

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
