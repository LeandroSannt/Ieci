import { FormHandles } from '@unform/core'
import { Form } from "@unform/web"
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import React, { ChangeEvent, useCallback, useRef, useState } from 'react'
import * as Yup from 'yup'

import farmacia from '../../../../assets/farmacia.png'
import { Button, HeaderSales, ProgressRegister } from '../../../../components'
import { InputText } from '../../../../components/form'
import { ArrowRight, Globo, Search } from '../../../../components/icons'
import { useAuth } from '../../../../hooks/useAuth'
import { useLang } from '../../../../hooks/useLang'
import { useToast } from '../../../../hooks/useToast'
import cepApi from '../../../../services/address'
import api from '../../../../services/api'
import { getApiCLient } from '../../../../services/axios'
import { PaidCourses } from '../../../../Types'
import getValidationErrors from '../../../../utils/getVlidationErros'

interface AddressData{
  cep:string
  city:string
  street:string
  state:string
  district:string
  adress_number:string
  complement:string
}

interface AddressCep {
  bairro:string
  localidade:string
  logradouro:string
  uf:string
}

const Address:React.FC = () =>{

  const {t} = useLang()
  const {notify} = useToast()
  const {user} = useAuth()
  const router = useRouter();
  const { query } = useRouter()
  const formRef= useRef<FormHandles>(null)
  const [addressCep,setAddressCep] = useState<AddressCep>()

  const handleSubmit= useCallback(async(data:AddressData) =>{

    try{
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        cep:Yup.string().required('Cep obrigatório'),
        city:Yup.string().required('Cidade obrigatória'),
        street:Yup.string().required('Rua obrigatória'),
        state:Yup.string().required('Estado obrigatório'),
        district:Yup.string().required('Bairro obrigatório'),
        adress_number:Yup.string().required('Número obrigatório'),
        complement:Yup.string().required('Complemento obrigatório'),  
      })

      
      await schema.validate(data,{
        abortEarly:false
      })

      await api.post(`/address/course/${query.id}`,{
        cep:data.cep.replace(/[^0-9]/g, ''),
        city:data.city,
        street:data.street,
        state:data.state,
        district:data.district,
        adress_number:data.adress_number,
        complement:data.complement
      })

      notify({
        message:'Cadastro realizado com sucesso',
        types:"success"
      })

      router.push({ pathname: `/cadastro/${query.id}/dados-academicos`});


    }catch(err){
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

  const handleChangeCep = async (e:ChangeEvent<HTMLInputElement>) =>{

    const thisCep = e.target.value.replace(/\D/g, '')
    const result = await cepApi.get(`ws/${thisCep}/json`)

    setAddressCep(result.data)
  }

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

      <ProgressRegister progress='address'/>

      <Form ref={formRef} onSubmit={handleSubmit} initialData={{ city: addressCep?.localidade, street:addressCep?.logradouro,district:addressCep?.bairro, state:addressCep?.uf }}>
        <h5>DADOS DE ENDEREÇO</h5>
        <InputText onBlur={(e) =>handleChangeCep(e)} mask={'99999-999'} name="cep" placeholder='Cep'  icon={<Search/>}/>
        <InputText name="city" placeholder='Cidade' icon={<Globo/>}/>
        <InputText name="street" placeholder='Rua,Avenida' icon={<Globo/>}/>

  
        <div  className="grid grid-cols-2 gap-4  my-6">
          <InputText name="state" placeholder='Estado' icon={<Globo/>}/>
          <div>
            <InputText name="district" placeholder='Bairro' icon={<Globo/>}/>
          </div>
        </div>

        <div  className="grid grid-cols-2 gap-4  my-6">
          <InputText name="adress_number" placeholder='Número' icon={<Globo/>}/>
          <div>
            <InputText name="complement" placeholder='Complemento' icon={<Globo/>}/>
          </div>
        </div>

        <div className='w-52 mx-auto my-16 block'>
          <Button typeButton={'primary'} text='Proximo'> <ArrowRight size={.8}/></Button>
        </div>
      </Form>

  </>)
}

export default Address

export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  const apiClient = getApiCLient(ctx)
  const {['nextAuth.token']:token} = parseCookies(ctx)

  const { query } = ctx

  if(token){

    const result = await apiClient.get(`/course_payment/${query.id}`)
    const paidCourse:PaidCourses = result.data

    if(paidCourse.address_id){
      return{
        redirect:{
          destination:`/cadastro/${query.id}/dados-academicos`,
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