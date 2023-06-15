import { schema,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreatePersonalDataValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    name:schema.string(),
    course:schema.string(),
    email:schema.string([
      rules.email()
    ]),
    cpf:schema.string([
      rules.maxLength(11)
    ]),
    rg:schema.string(),
    dispatcher:schema.string(),
    birth_date:schema.string(),
    gender:schema.enum(['Masculino','Feminino']),
    father_name:schema.string(),
    mother_name:schema.string(),
    birth_city:schema.string(),
    nacionality:schema.string(),
    phone_number:schema.string(),
    cell_number:schema.string()
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}
