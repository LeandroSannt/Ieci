import { schema,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateCourseValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title:schema.string(),
    category_id:schema.number([
      rules.exists({table:'categories',column:"id"})
    ])
  })

  public messages = {}
}
