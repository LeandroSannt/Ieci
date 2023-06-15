
import mercadopago from 'mercadopago';
interface PayerProps{
  email:string,
  identification: {
    type: string,
    number: string,
  },
}

interface PropsPayment{
  token:string,
  issuer_id:string,
  payment_method_id:string,
  transaction_amount: number,
  installments:number,
  description: string,
  payer: PayerProps
}

class ProcessPayment{
  async store(data:PropsPayment) {

    try{
    process.env.MERCADO_PAGO_ACCESS_TOKEN
    && mercadopago.configurations.setAccessToken(process.env.MERCADO_PAGO_ACCESS_TOKEN);

    const savedPayment = await mercadopago.payment.save(data)

    // console.log(savedPayment)
    return savedPayment

    }catch(err){
      console.log(err)
    }
  }
}

export { ProcessPayment };


