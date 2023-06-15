import { FormHandles } from '@unform/core';
import { Form } from "@unform/web";
import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';
import api from '../../services/api';
import getValidationErrors from '../../utils/getVlidationErros';
import InputText from '../form/InputText';
import { Email, Leave, Lock, UserByAdmin } from '../icons';
import { Button } from '../index';
import { Container, Content } from './styles';


interface UserProps{
  id:number
  name:string
  email:string
}

interface ModalUserProps{
  activeModal(value:boolean):void
  user?:UserProps | undefined | null
  active:boolean
}

interface DataFormProps{
  email:string
  newPassword:string
  repeatPassword:string
  actualPassword:string
}

const Modal:React.FC<ModalUserProps> = ({active,user,activeModal}) =>{

  const formRef= useRef<FormHandles>(null)
  const [ activeForm,setActiveForm] = useState(false)
  const {notify} = useToast()
  const auth = useAuth()

  const handleSubmit = async (data:DataFormProps) =>{

    try{
      formRef.current?.setErrors({});
      
      const schema = Yup.object().shape({
        actualPassword:Yup.string().required('Campo obrigatório'),
        email:Yup.string().email('Digite um email valido'),
        newPassword:Yup.string().required('Campo obrigatório'),
        repeatPassword:Yup.string().oneOf([Yup.ref('newPassword'), null], 'Senha e confirmação de senha não são iguais').required('Campo obrigatório'),
      })
      
      await schema.validate(data,{
        abortEarly:false
      })

   const userUpdate =  await api.put(`/users`,{
      email:data.email,
      actualPassword:data.actualPassword,
      newPassword:data.newPassword,
      repeatPassword:data.repeatPassword,
    })

    if(auth.user){
      auth.user.email = userUpdate.data.email
    }

    notify({
      message:'Conta atualizada com sucesso',
      types:"success"
    })

    active = false


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

      notify({
        message:err.response.data.errors[0].message,
        types:"error"
      })
    }
  }

  return(
    <Container isActive={active} >
      <div className='backgroundBlur'>
        {
          !activeForm ?
          <Content>
          <div>
            <header>
              <UserByAdmin/>
              <h5>{user?.name}</h5>
            </header>  
            <section>
              <h5>Dados Pessoais</h5>
              <label htmlFor="">
                E-mail: <p>{user?.email}</p>
              </label>
              <label htmlFor="">
                Senha: <p>******************</p>
              </label>
              <Button onClick={() =>{setActiveForm(true)}} style={{marginTop:"46px"}}  typeButton={'secondary'} text={'Alterar dados'}/> 
            </section> 
          </div> 

          <button onClick={() => { activeModal(false) } } className='btnClosed'>Sair<Leave/> </button>
          </Content>
        :
        <Content>
          <div>
            <header>
              <UserByAdmin/>
              <h5>{user?.name}</h5>
            </header>  

            <Form ref={formRef} onSubmit={handleSubmit} initialData={{ email: auth.user?.email }}>
              <InputText name="email" placeholder='email@email.com'  icon={<Email/>}/>
              <InputText type={'password'} name="actualPassword" placeholder='Senha Atual'  icon={<Lock/>}/>
              <InputText type={'password'} name="newPassword" placeholder='Nova Senha'  icon={<Lock/>}/>
              <InputText type={'password'} name="repeatPassword" placeholder='Repetir Nova Senha'  icon={<Lock/>}/>
              <Button style={{marginTop:"15px"}} typeButton={'secondary'} text={'Salvar Alterações'}/> 
            </Form>
          </div>
          <button onClick={() => { activeModal(false) } } className='btnClosed'>Sair<Leave/> </button>
        </Content>
        }
      </div>
    </Container>
  )
}

export default Modal
