import axios from 'axios';
import { parseCookies } from "nookies"

export function getApiCLient(ctx?:any) {
const { 'nextAuth.token':token} = parseCookies(ctx)
const api = axios.create({
  baseURL: 'http://localhost:3333'
})

if(token){
  const originalToken = token.substring(0, token.length - 1)
  api.defaults.headers.common = {'Authorization': `bearer ${originalToken}`}
}

// api.interceptors.request.use(config =>{
//   console.log(config)

//   return config
// })

return api
}