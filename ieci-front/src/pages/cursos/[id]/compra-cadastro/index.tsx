import React, { useCallback, useRef } from 'react'
import { Container } from './styles'

import { Button, HeaderSales, LoadingPage, ProgressPayment } from '../../../../components'
import { InputText } from '../../../../components/form/'
import { Email, Lock, User, Warning } from '../../../../components/icons'
import { useAuth } from '../../../../hooks/useAuth'
import { useLang } from '../../../../hooks/useLang'
import { useToast } from '../../../../hooks/useToast'
import api from '../../../../services/api'
import { CourseProps } from '../../../../Types'
import getValidationErrors from '../../../../utils/getVlidationErros'

import { FormHandles } from '@unform/core'
import { Form } from "@unform/web"
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import * as Yup from 'yup'

import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import farmacia from '../../../../assets/farmacia.png'

interface SignInFormData{
  email:string
  password:string
  name:string
}

const CompraCadastro:React.FC = () =>{
  const {t} = useLang()
  const {notify} = useToast()
  const { query } = useRouter()
  const router = useRouter();
  const {signIn} = useAuth()
  const formRef= useRef<FormHandles>(null)

  const handleSubmit= useCallback(async(data:SignInFormData) =>{
    try{
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        name:Yup.string().required('Nome obrigatório'),
        email:Yup.string().required('E-mail obrigatório').email('Digite um e-mail valido'),
        password:Yup.string().min(8,'A senha deve conter no minimo 8 digitos').required('Senha obrigatória')
      })
      
      await schema.validate(data,{
        abortEarly:false
      })

       await api.post('/users',data)
       .then(async (response) =>{
        if(response.status === 200) {
          notify({
            message:'Cadastro realizado com sucesso',
            types:"success"
          })

          const r = await signIn({
            email:data.email,
            password:data.password
          })

          console.log(r)

          router.push({ pathname: `/cursos/${query.id}/compra-pagamento-cartao`});
        }
       })

    }catch(err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors);

        err.errors.map((err) =>{
          notify({
            message:err,
            types:"error"
          })
        })
        
        return
      }

      notify({
        message:err.response.data,
        types:"error"
      })
    }

  },[notify, query.id, router, signIn])

  const {data,isLoading} = useQuery<CourseProps>('course', async () =>{
    const response = await api.get(`/course/${query.id}`)
    return response.data
    }
  )

  return(
    <Container >
      {isLoading && <LoadingPage/>}
      <HeaderSales 
      routerPush={`/cursos`}
      title={data?.title} 
      imgCourse={farmacia.src} 
      duration={{
        totalHours: data?.totalHours,
      }}
      valueRegistration={new Intl.NumberFormat('pt-BR', {
        style:'currency',
        currency:'BRL',  
        }).format(data?.priceSubscription || 0)}

      />
      <ProgressPayment progress={'register'}/>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h5>{t.PURCHASE_REGISTRATION.INFORMATIONS_PROFILE}</h5>
        <InputText name="name" placeholder={t.PURCHASE_REGISTRATION.NAME}  icon={<User/>}/>
        <InputText name="email" placeholder={t.PURCHASE_REGISTRATION.EMAIL} icon={<Email/>}/>
        <InputText name="password" type='password' placeholder={t.PURCHASE_REGISTRATION.CREATE_PASSWORD} icon={<Lock/>}/>
        <span> <Warning size={1.6}/>{t.PURCHASE_REGISTRATION.MIN_CARACTERES_PASSWORD}</span>

        <div className='w-60 mx-auto mt-16 mb-20 '>
          <Button typeButton={'primary'} text={t.GLOBAL.BUTTON.PROGRESS}/>
        </div>

        {/* <div className='bg' style={{backgroundImage: `url(${bg.src})`}}></div> */}
      </Form>

    </Container>
  )
}

export default CompraCadastro


export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  const {['nextAuth.token']:token} = parseCookies(ctx)
  const {params} = ctx

  if(token){
    return{
      redirect:{
        destination:`/cursos/${params?.id}/compra-pagamento-cartao`,
        permanent:false
      }
    }
  }

  return{
    props:{}
  }
}