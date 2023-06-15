import axios from "axios"
import mercadopago from "mercadopago"

if(process.env.MERCADO_PAGO_ACCESS_TOKEN){

  mercadopago.configure({
    access_token:process.env.MERCADO_PAGO_ACCESS_TOKEN
  })
  
}

const apiMercadoPago = axios.create({
  baseURL: 'https://api.mercadopago.com/v1'
})

apiMercadoPago.defaults.headers.common = {'Authorization': `bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`}



export { mercadopago, apiMercadoPago }

