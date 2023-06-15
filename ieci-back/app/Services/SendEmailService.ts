import Mail from '@ioc:Adonis/Addons/Mail'

interface EmailProps{
  from:string
  to:string
  subject:string
  htmlView:{
    view:string
    props:Object
  }
}

class SendEmail{
  async email({from,to,subject,htmlView}:EmailProps) {
    try{
      await Mail.send((message) =>{
        message
          .from(from)
          .to(to)
          .subject(subject)
          .htmlView(htmlView.view,htmlView.props)
      })

    }catch(err){
      console.log(err)
    }

    return

  }
}

export {SendEmail}


