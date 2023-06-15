import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ProcessPayment } from '../../Services/processPayment'


export default class ProcessPaymentController {
  public async store({request}:HttpContextContract){
    const processPayment = new ProcessPayment()
    const data = request.only(['token','issuer_id','payment_method_id','transaction_amount','installments','description','payer'])


    const result = await processPayment.store(data)



    return result
  }


}
