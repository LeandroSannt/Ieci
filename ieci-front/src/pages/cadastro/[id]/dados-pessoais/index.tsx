import { FormHandles } from '@unform/core'
import { Form } from "@unform/web"
import { GetServerSideProps } from 'next'
import router, { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import React,{ useCallback, useRef } from  'react'
import { useQuery } from 'react-query'
import * as Yup from 'yup'

import farmacia from '../../../../assets/farmacia.png'
import { Button, HeaderSales, ProgressRegister } from '../../../../components'
import { InputText, RadioBox } from '../../../../components/form'
import { ArrowRight, Calender, Course, Cpf, Email, Expedition, Globo, Person, Phone, User } from '../../../../components/icons'
import { useAuth } from '../../../../hooks/useAuth'
import { useLang } from '../../../../hooks/useLang'
import { useToast } from '../../../../hooks/useToast'
import api from '../../../../services/api'
import { getApiCLient } from '../../../../services/axios'
import { CourseProps, PaidCourses, User as UserProps } from '../../../../Types'
import getValidationErrors from '../../../../utils/getVlidationErros'

interface PersonalData{
  name:string,
  course:string,
  email:string,
  cpf:string,
  rg:string,
  dispatcher:string,
  birth_date:Date,
  gender:string,
  father_name:string,
  mother_name:string,
  birth_city:string,
  nacionality:string,
  phone_number:string,
  cell_number:string
}


interface RadioOption {
  id: string;
  value: string;
  label: string;
}

const PessoalData:React.FC = () =>{

  const {t} = useLang()
  const {notify} = useToast()
  const {user} = useAuth()
  const { query } = useRouter()

  const formRef= useRef<FormHandles>(null)

  const response = useQuery<CourseProps>('course', async () =>{
    const response = await api.get(`/course/${query.id}`)
    return response.data
    }
  )


  const handleSubmit= useCallback(async(data:PersonalData) =>{

    

    try{
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        cpf:Yup.string().required('Digite um cpf valido'),
        rg:Yup.string().required('Digite o numero da sua indentidade'),
        dispatcher:Yup.string().max(3).required('Orgão expedidor necessario'),
        birth_date:Yup.date().required('Data de nascimento necessaria'),
        gender:Yup.string().required('Genero necessario'),
        father_name:Yup.string().required('Nome completo do pai necessario'),
        mother_name:Yup.string().required('Nome completo do mãe necessario'),
        birth_city:Yup.string().required('Cidade de nascimento nescessaria'),
        nacionality:Yup.string().required('Pais em que nasceu'),
        phone_number:Yup.string().required('Numero de telefone necessario'),
        cell_number:Yup.string().required('Numero de celular necessario'),
      })

      await schema.validate(data,{
        abortEarly:false
      })

      await api.post(`/personalData/course/${query.id}`,{
        name:user?.name,
        email:user?.email,
        course:response.data?.title,
        cpf:data.cpf.replace(/[^0-9]/g, ''),
        rg:data.rg,
        dispatcher:data.dispatcher,
        birth_date:data.birth_date,
        gender:data.gender,
        father_name:data.father_name,
        mother_name:data.mother_name,
        birth_city:data.birth_city,
        nacionality:data.nacionality,
        phone_number:data.phone_number,
        cell_number:data.cell_number
      })

      notify({
        message:'Cadastro realizado com sucesso',
        types:"success"
      })

      router.push({ pathname: `/cadastro/${query.id}/endereco`});

    }catch(err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors);

        notify({
          message:'Preencha todos os campos',
          types:"error"
        })
        return
      }
      
      notify({
        message:'Preencha os campos obrigatórios',
        types:"error"
      })
    }

  },[notify, query.id, response.data?.title, user?.email, user?.name])

  const radioOptions: RadioOption[] = [
    { id: '1', value: "Masculino", label: "Masculino" },
    { id: '2', value: "Feminino", label: "Feminino" }
  ];

  return (<>
    <HeaderSales 
      routerPush={`/cursos`}
      imgCourse={farmacia.src} 
      hasTitle={true}
      title={user?.name}
      userData ={{email:user?.email || '', course:response.data?.title || '', cpf:""}}
      />
      <ProgressRegister progress='register'/>

      <Form ref={formRef} onSubmit={handleSubmit} initialData={{ gender: radioOptions[0].id }}>
        <h5>{t.PURCHASE_REGISTRATION.INFORMATIONS_PROFILE}</h5>
        <InputText mask={'999.999.999-99'} name="cpf" placeholder={t.PURCHASE_REGISTRATION.CPF} icon={<Cpf/>}/>

        <div className="grid grid-cols-2 gap-4  my-6">
          <InputText name="rg" placeholder='Identidade de (RG)' icon={<Cpf/>}/>
          <div>
            <InputText name="dispatcher" placeholder='Orgão Expedidor' icon={<Expedition/>}/>
          </div>
        </div>
        <InputText type={'date'} name="birth_date" placeholder='Data de nascimento' icon={<Calender/>}/>

        <div className='flex items-center my-6'>
          <p className='text-purple300 text-xl font-bold'>
            Sexo:
          </p>
          <RadioBox name="gender" options={radioOptions} />
        </div>

        <InputText name="father_name" placeholder='Nome completo do seu pai' icon={<Person/>}/>
        <InputText name="mother_name" placeholder='Nome completo da sua mãe' icon={<Person/>}/>
        <InputText name="birth_city" placeholder='Cidade de nascimento' icon={<Globo/>}/>
        <InputText name="nacionality" placeholder='Nacionalidade' icon={<Globo/>}/>
        <InputText name="phone_number" placeholder='Número de Telefone' icon={<Phone/>}/>
        <InputText name="cell_number" placeholder='Número de Celular' icon={<Phone/>}/>

        <div className='w-52 mx-auto my-16 block'>
          <Button type='submit' typeButton={'primary'} text='Proximo'> <ArrowRight size={.8}/></Button>
        </div>
      </Form>
  </>)
}

export default PessoalData


export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  const apiClient = getApiCLient(ctx)
  const {['nextAuth.token']:token} = parseCookies(ctx)

  const {query} = ctx

  if(token){

   const result = await apiClient.get(`/course_payment/${query.id}`)
    const paidCourse:PaidCourses = result.data

    if(paidCourse.personal_data_id){

      return{
        redirect:{
          destination:`cadastro/${query.id}/endereco`,
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