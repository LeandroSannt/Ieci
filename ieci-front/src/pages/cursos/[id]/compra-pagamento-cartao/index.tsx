import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import copy from "copy-to-clipboard"
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import * as Yup from 'yup'
import farmacia from '../../../../assets/farmacia.png'
import { Button, CardFlip, HeaderSales, ProgressPayment, Spinner } from '../../../../components'
import { InputText, Select, TransactionType } from '../../../../components/form'
import { Calender, Cart, Lock, User } from '../../../../components/icons'
import { useAuth } from '../../../../hooks/useAuth'
import { useCard } from '../../../../hooks/useCard'
import { useLang } from '../../../../hooks/useLang'
import { useMercadoPago } from '../../../../hooks/useMercadoPago'
import { useToast } from '../../../../hooks/useToast'
import api from '../../../../services/api'
import { CourseProps, ResponseQrCode } from '../../../../Types'
import getValidationErrors from '../../../../utils/getVlidationErros'
import { Container, PixContainer } from './styles'

const INITIAL_STATE = {
  cvc: "",
  cardExpirationMonth: "",
  cardExpirationYear: "",
  focus: "cardNumber",
  cardholderName: "",
  cardNumber: "",
  issuer: "",
};

interface SignInFormData{
  name_card:string
  number_card:string
  expiration:string
  cvv:string
  cpf:string
  typeTransaction: 'card' | 'pix'
}

interface PixProps{
  qrCod:ResponseQrCode | undefined
  course:CourseProps | undefined
}

const CompraCadastro:React.FC = () =>{

  const [type,setType] =useState('card')
  const [qrCod,setQrCod] =useState<ResponseQrCode>()
  const {user} = useAuth()
  const { query } = useRouter()
  const {t} = useLang()
  const {notify} = useToast()
  const {getCourse} = useMercadoPago()

  const formRef= useRef<FormHandles>(null)

  const { data } = useQuery<CourseProps>('course', async () =>{
    if(query.id){
      const response = await api.get(`course/${query.id}`)
      return response.data
    }
    }
  )

  useEffect(() =>{
    getCourse(data)
  },[data, getCourse])

  const handleSubmit= useCallback(async(data:SignInFormData) =>{
    const newData = {...data, typeTransaction:type}
    try{
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        number_card:Yup.string().required('Número do cartão obrigatório').min(16,'Digite um número válido'),
        installments:Yup.string().required('Campo obrigatório'),
        cardExpirationMonth:Yup.string().required('Data obrigatória').min(2),
        cardExpirationYear:Yup.string().required('Data obrigatória').min(2,'Digite um número válido'),
        cvc:Yup.string().required('Codigó de segurança obrigatório').min(3,'Digite um número válido'),
        cardholderName:Yup.string().required('Nome obrigatório'),
        identificationNumber:Yup.string().required('Cpf obrigatório')
      })
      
      await schema.validate(data,{
        abortEarly:false
      })

      notify({
        message:"Compra finalizada com sucesso",
        types:'success'
      })

    }catch(err:any){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors);

        notify({
          message:err.message,
          types:"error"
        })

        return
      }
    }

  },[notify, type])

  return(
      <Container >
        <HeaderSales 
        routerPush={`/cursos`}
        title={data?.title} 
        imgCourse={farmacia.src} 
        duration={{
          totalHours: data?.totalHours,
        }}
        valueRegistration={data?.priceSubscription.toString()}
        />

        <ProgressPayment progress={'payment'}/>

        <Form id="form-checkout" ref={formRef} onSubmit={handleSubmit}>
          <h5>ESCOLHA A FORMA DE PAGAMENTO</h5>
          <TransactionType type={type} setQrCod={setQrCod} typeTransaction={setType} />

          <div className="hidden">
            <input  type="hidden" defaultValue={user?.name[0]} id="form-checkout__payerFirstName" name="payerFirstName" />
            <input  type="hidden" defaultValue={user?.name[1]} id="form-checkout__payerLastName" name="payerLastName" />
            <input  type="hidden" defaultValue={user?.email} id="form-checkout__email" name="email" />
            <select disabled id="form-checkout__identificationType" name="identificationType" ></select>
            <input defaultValue={'03785209380'} id="form-checkout__identificationNumber" name="identificationNumber" type="text"/>
            <input defaultValue={data?.priceSubscription.toString()} type="hidden" name="transactionAmount" id="transactionAmount" />
            <input defaultValue={data?.title} type="hidden" name="description" id="description" />
            <InputText 
              name="cardholderEmail"
              id="form-checkout__cardholderEmail"
              type="text"  
              icon={<Cart/>} 
              defaultValue={user?.email}
              flip={false}
              readOnly
              />

              <Select disabled  name="issuer" id="form-checkout__issuer">
              </Select>

              <Select disabled name="identificationType" id="form-checkout__identificationType">
              </Select>
          </div>

          { type === 'card'?
            <FormCreditDebit/>
            :
            <PaymentPix course= {data} qrCod={qrCod}/>
          }
        </Form>
      </Container>
  )
}

const FormCreditDebit:React.FC = () =>{
  const [state, setState] = useState(INITIAL_STATE);
  const {changeNumberCart,changeMonthExpiration,changeYearExpiration,changeCodCard,setIsFlipped}  = useCard()

  const handleInputChange = (e:any) => {
    setState({
      ...state,
      [e.target.dataset.name || e.target.name]: e.target.value,
    });
  };

  const handleInputFocus = (e:any) => {
    setState({ ...state, focus: e.target.dataset.name || e.target.name });
  };

  return(
    <>
    <CardFlip/>
    <h5 className='informationsPaymentTitle'>INFORMAÇÕES DE PAGAMENTO</h5>

    <div className='mb-7' >
      <InputText 
        id='form-checkout__cardNumber'
        mask={'9999 9999 9999 9999'}
        name={"number_card"} 
        type="text"  
        icon={<Cart/>} 
        onChange={(e)=>{
          handleInputChange(e) 
          changeNumberCart(e.target.value)}}
        onFocus={(e) =>{
          setIsFlipped(false)
          handleInputFocus(e)}}
        flip={false}
      />
    </div>

    <Select  name="installments" id="form-checkout__installments">
    </Select>
    
    <div className="gridCard">
      <div>
        <InputText 
          name="cardExpirationMonth"
          mask={'99'}
          id="form-checkout__cardExpirationMonth"
          placeholder='Mes de expiração'
          onChange={(e)=>{
            handleInputChange(e) 
            changeMonthExpiration(e.target.value)}}
          flip={false}
          icon={<Calender/>} 
        />
      </div>

      <div>
        <InputText 
          name="cardExpirationYear"
          mask={'99'}
          id="form-checkout__cardExpirationYear"
          placeholder='Mes de expiração'
          flip={false}
          onChange={(e)=>{
            handleInputChange(e) 
            changeYearExpiration(e.target.value)}}
          onFocus={(e) =>{
            setIsFlipped(false)
            handleInputFocus(e)}}
          icon={<Calender/>} 
        />
      </div>

      <div>
        <InputText 
          name="cvc"
          mask={'999'}
          id="form-checkout__securityCode"
          placeholder='Mes de expiração'
          onChange={(e)=>{
            handleInputChange(e) 
            changeCodCard(e.target.value)}}
          flip={true}
          icon={<Lock/>} 
        />
      </div>
    </div>

    <InputText 
      secondStyle
      name="cardholderName"
      id="form-checkout__cardholderName"
      type="text"  
      icon={<User/>} 
      onChange={(e)=>{
        handleInputChange(e)}}
      onFocus={(e) =>{
        setIsFlipped(false)
        handleInputFocus(e)}}
      flip={false}
    />

    <InputText 
      name="identificationNumber"
      id="form-checkout__identificationNumber"
      type="text"  
      placeholder='CPF'
      icon={<Cart/>} 
      flip={false}
    />

    <aside className='w-64 mx-auto my-12'>
      <Button  type="submit" id="form-checkout__submit" typeButton={'primary'}text={'Confirmar Pagamento'}  />
    </aside>
      
    {/* <div className="hidden">
        <InputText 
          name="cardholderEmail"
          id="form-checkout__cardholderEmail"
          type="text"  
          icon={<Cart/>} 
          defaultValue={user?.email}
          flip={false}
          />

        <Select name="issuer" id="form-checkout__issuer">
        </Select>

        <Select name="identificationType" id="form-checkout__identificationType">
        </Select>
    </div> */}

    </>

  )
}

const PaymentPix:React.FC<PixProps> =({course,qrCod}) =>{
  const [, setCopyText] = useState('');
  const {notify} = useToast()
  const handleCopyText = (e:any) => {
    setCopyText(e.target.value);
  } 

  const copyToClipboard = () => {
    copy(qrCod?.qr_code || '');
    notify({
      message:`Chave copiada para a área de transferência` ,
      types:'success'
    })
  }

  return(
    <PixContainer>
      <div className='informationsPix'>
        <h5>INFORMAÇÕES DE PAGAMENTO</h5>
        <p>IECI - Instituo de Educação e Cultura Internacional</p>
        <p className='secondP'>
          Valor: <span> R$ {course?.priceSubscription}</span>
        </p>

        <p className='tirthP'>
          Codigo Pix válido até: <span> XX/XX/XXX 16:14 (horário de Brasilia) de XX/XX/XXXX até XX/XX/XXXX</span>
        </p>

      </div>

      {qrCod ? 
      <div className='qrCode'>
        <Image
          src={`data:image/jpeg;base64,${qrCod?.qr_code_base64}`}
          alt="Picture of the author"
          width="274px"
          height="274px"
        />
      </div>
      :
      <Spinner/>
    }

      <div className="keyPix">
        <h4>Copiar a chave pix</h4>
        
        <input type="text" onChange={handleCopyText}  value={qrCod?.qr_code} placeholder='Chave Pix'/>
        <aside className='w-60 mb-7 '>
          <Button onClick={copyToClipboard} typeButton={'secondary'} type='button' text={'Copiar chave'} />
        </aside>
      </div>
      
    </PixContainer>
  )
}

export const getServerSideProps:GetServerSideProps = async ()  => {
  return {
    props: {},
  }
}

export default CompraCadastro

