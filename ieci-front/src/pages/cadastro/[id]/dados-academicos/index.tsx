import { FormHandles } from '@unform/core'
import { Form } from "@unform/web"
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import React, { useCallback, useRef } from 'react'
import * as Yup from 'yup'

import farmacia from '../../../../assets/farmacia.png'
import ilustracao3 from '../../../../assets/ilustracao03.svg'
import { Button, HeaderSales, ProgressRegister } from '../../../../components'
import { InputText } from '../../../../components/form'
import { Calender, Cap, Cart } from '../../../../components/icons'
import { useLang } from '../../../../hooks/useLang'
import { useToast } from '../../../../hooks/useToast'
import api from '../../../../services/api'
import { getApiCLient } from '../../../../services/axios'
import { PaidCourses } from '../../../../Types'
import getValidationErrors from '../../../../utils/getVlidationErros'

import { useAuth } from '../../../../hooks/useAuth'


interface AcademicData{
  graduation:string
  year_graduated:string
  institution_graduated:string
  expiration:Date
  number_months:string

}

interface RadioOption {
  id: string;
  value: string;
  label: string;
}

const AcademicData:React.FC = () =>{

  const {t} = useLang()
  const {notify} = useToast()
  const {user}  = useAuth()
  const router = useRouter()
  const { query } = useRouter()

  const formRef= useRef<FormHandles>(null)

  const handleSubmit= useCallback(async(data:AcademicData) =>{

    try{
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        graduation:Yup.string().required('Nome do curso obrigatório'),
        year_graduated:Yup.string().required('Ano de formação obrigatório'),
        institution_graduated:Yup.string().required('Instituição obrigatória'),
        expiration:Yup.string().required('Vencimento obrigatório'),
        number_months:Yup.string().required('Campo obrigatório')
      })

      await schema.validate(data,{
        abortEarly:false
      })

     const response = await api.post(`/academicData/course/${query.id}`,{
        graduation:data.graduation,
        year_graduated:data.year_graduated,
        institution_graduated:data.institution_graduated,
        expiration:data.expiration,
        number_months:data.number_months
      })

      notify({
        message:'Cadastro finalizado',
        types:"success"
      })

     router.push({ pathname: `/meu-perfil`});

    }catch(err:any){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors);

        notify({
          message:'Preencha os campos obrigatórios',
          types:"error"
        })

        return
      }



    }

  },[notify, query.id, router])

  return (<>
    <HeaderSales 
      routerPush={`/cursos`}
      imgCourse={farmacia.src} 
      hasTitle={true}
      title={"Leandro santos"}
      userData={{
        email:user?.email || '',
        cpf:"***.000.***-00",
        course:'Farmácia Hospitalar'
      }}
      />

      <ProgressRegister progress='finished'/>
      <Form ref={formRef} onSubmit={handleSubmit} >
        <h5>DADOS ACADÊMICOS</h5>
        <InputText name="graduation" placeholder='Qual sua graduação'  icon={<Cap/>}/>
        <InputText name="year_graduated" placeholder='Em que ano se formou?' icon={<Cap/>}/>
        <InputText name="institution_graduated" placeholder='Qual Instituição realizou a graduação?' icon={<Cap/>}/>
        <InputText type={'date'} name="expiration" placeholder='Data de vencimento da mensalidade' icon={<Calender/>}/>
        <InputText type={'number'} name="number_months" placeholder='Deseja pagar em quantos mêses' icon={<Cart/>}/>

      <div
       style={{
        position: 'absolute',
        width: '700px',
        height: '400px',
        backgroundImage: `url(${ilustracao3.src})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:"100%",
        backgroundSize: '100%'}}>

          <div className='w-52 mx-auto my-16 block'>
            <Button typeButton={'primary'} text='Enviar'> </Button>
          </div>
      </div>
      </Form>
  </>
  )
}

export default AcademicData

export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  const apiClient = getApiCLient(ctx)
  const {['nextAuth.token']:token} = parseCookies(ctx)

  const {query} = ctx
  if(token){

    const result = await apiClient.get(`/course_payment/${query.id}`)
    const paidCourse:PaidCourses = result.data

    if(paidCourse.academic_data_id){
  
      return{
        redirect:{
          destination:'/meu-perfil',
          permanent:false
        }
      }
    }
  }

  if(!token){
    return{
      redirect:{
        destination:'/login',
        permanent:false
      }
    }
  }

  return{
    props:{}
  }
}