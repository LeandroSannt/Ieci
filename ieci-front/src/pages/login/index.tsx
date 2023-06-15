
import React, { useCallback, useRef } from 'react'
import { Container } from './styles'

import { Button, Footer, Header } from '../../components'
import { InputText } from '../../components/form/'
import { Email, Lock } from '../../components/icons'
import { useAuth } from '../../hooks/useAuth'
import { useLang } from '../../hooks/useLang'
import { useToast } from '../../hooks/useToast'
import getValidationErrors from '../../utils/getVlidationErros'

import { FormHandles } from '@unform/core'
import { Form } from "@unform/web"
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import router, { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import * as Yup from 'yup'

interface SignInFormData{
  email:string
  password:string
}

const Login:React.FC = () =>{

  const {t} = useLang()
  const {notify} = useToast()
  const {signIn} = useAuth()
  const { query } = useRouter()

  const formRef= useRef<FormHandles>(null)

  const handleSubmit= useCallback(async(data:SignInFormData) =>{

    try{
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        email:Yup.string().required('E-mail obrigatório').email('Digite um e-mail valido'),
        password:Yup.string().required('Senha obrigatória')
      })
      
      await schema.validate(data,{
        abortEarly:false
      })

      await signIn({
        email:data.email,
        password:data.password
      })

      notify({
        message:'Logado com sucesso',
        types:"success"
      })

      router.push({ pathname: `/meu-perfil`});

    }catch(err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors);

        notify({
          message:err.message,
          types:"error"
        })

        return
      }

      notify({
        message:'E-mail ou senha invalido',
        types:"error"
      })
    }

  },[notify, signIn])


  return(
    <>
    <Header/>
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <InputText name="email" placeholder={t.PURCHASE_REGISTRATION.NAME}  icon={<Email/>}/>
        <InputText name="password" type='password' placeholder={t.PURCHASE_REGISTRATION.CREATE_PASSWORD} icon={<Lock/>}/>

        <div className='w-96 mx-auto mt-10 mb-20 btnLink '>
          <Button typeButton={'fourth'} text='Fazer Login'/>
            <span>Esqueceu sua senha?
              <Link href={''}>
                <a>
                 Clique aqui!
                </a>
              </Link>
            </span>
        </div>
      </Form>
      </Container>
    <Footer/>
    </>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  const {['nextAuth.token']:token} = parseCookies(ctx)

  if(token){
    return{
      redirect:{
        destination:`cursos/${1}/compra-pagamento-cartao`,
        permanent:false
      }
    }
  }
  return{
    props:{}
  }
}