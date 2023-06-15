import React from 'react'
import { useMercadoPago } from '../../../hooks/useMercadoPago'
import { ResponseQrCode } from '../../../Types'
import { Cart, Pix } from '../../icons'
import { RadioBox, TransactionTypeContainer } from './styles'

interface TransactionProps{
  typeTransaction(value:string):void
  setQrCod(value:ResponseQrCode):void
  type:string
}

const TransactionType:React.FC<TransactionProps> = ({type,setQrCod,typeTransaction}) =>{
   const {generateQrCod} = useMercadoPago()

   const responsePayment = async() =>{
      const response = await generateQrCod()
      setQrCod(response)
   }

  return(
  <TransactionTypeContainer>
      <RadioBox htmlFor="first" onClick={() => typeTransaction('card')} isActive={type === 'card'} activeColor= 'purple400'>
        <Cart />
        <span>Crédito/Débito</span>
        <input 
          className='radio bg-inherit checked:bg-purple300  border-purple300 border-2 right-0 ' checked
          name="transaction" id={"first"} type="radio" readOnly/>
      </RadioBox>

      <RadioBox htmlFor="second" onClick={() => {
        typeTransaction('pix')
        responsePayment() 
        }} isActive={type === 'pix'} activeColor= 'purple900'>
          <Pix />
            <span>Transferência PIX</span>
            <input 
              className='radio bg-inherit checked:bg-purple300  border-purple300 border-2 right-0 '
              name="transaction" id={"second"}  type="radio" readOnly />
      </RadioBox>

  </TransactionTypeContainer>
  )
}

export default TransactionType