import axios from 'axios';

const apiMpTeste = axios.create({
  baseURL: 'https://api.mercadopago.com/v1'
})

apiMpTeste.defaults.headers.common = {'Authorization': `bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`}


export { apiMpTeste };
