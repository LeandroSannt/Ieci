import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'

export default class HasAdminLogged {
  public async handle({auth}: HttpContextContract, next: () => Promise<void>) {
    const currentUser = auth.user

    if(currentUser?.isAdmin === true){
      throw new AuthenticationException(
        'Unauthorized access',
        'Only admins have access to this route',
      )
    }

    await next()
  }
}
