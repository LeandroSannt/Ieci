import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthenticatesController {
  public async store({request,response, auth}:HttpContextContract){
    const {email,password} = request.only(['email','password'])

    const token = await auth.use('api').attempt(email,password,{
      expiresIn:'24hours'
    })

    const userToken = {
      token:token.token + token.user.id.toString(),
      expires_at:token.expiresAt,
      type:token.type,
      originalToken:token.token
    }

    return response.created({user:auth.user,userToken})

  }

  public async destroy({response, auth}:HttpContextContract){

    auth.logout()
    return response.created()

  }
}
