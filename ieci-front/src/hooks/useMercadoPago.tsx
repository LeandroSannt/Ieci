import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/api'
import { CourseProps, ResponseQrCode } from '../Types'
import { formConfig } from './form'
import { useAuth } from './useAuth'

import { useScript } from './useScript'
interface MpContextState{
  mercadoPago:any
  setTypePayment(value:string):void
  generateQrCod():Promise<ResponseQrCode>
  getCourse(value:CourseProps):void
}
interface Props{
  children:JSX.Element
}

//iniciando um contexto vazio precisa colocar o as e o nome da interface
const MpContext = createContext<MpContextState>({} as MpContextState)

const MpProvider = ({children}:Props) => {

  const [mercadoPago,setMercadoPago] = useState<any>(null)
  const [, setResultPayment] = useState(undefined);
  const [,setTypePayment] = useState('')
  const [course,setCourse] = useState<CourseProps>()
  const { query } = useRouter()
  const {user} = useAuth()
  const {MercadoPago} = useScript()

  const getCourse = (course:CourseProps) =>{
    setCourse(course)
  }

  const generateQrCod = async () =>{  
    const response =  await api.post(`/process-payment`,{
      transaction_amount: course?.priceSubscription || 200 ,
      description: course?.title || 'teste',
      payment_method_id: 'pix',
      payer: {
        email: user?.email,
        first_name: user?.name[0],
        last_name: user?.name[1]
      }
    })
    .catch((err) => {
      setResultPayment(err);
    });

    return (response as any).data.response?.point_of_interaction?.transaction_data as ResponseQrCode
  }

  useEffect(() => {
    if (MercadoPago) {
      const cardForm = MercadoPago.cardForm({
        amount: course?.priceSubscription.toString() || '200',
        autoMount: true,
        form: formConfig,
        callbacks: {
          onFormMounted: (error:any) => {
            if (error)
              return console.warn(
                "Form Mounted handling error: ",
                error
              );
          },
          onSubmit: (event:any) => {
            event.preventDefault();
            const {
              paymentMethodId: payment_method_id,
              issuerId: issuer_id,
              cardholderEmail: email,
              amount,
              token,
              installments,
              identificationNumber,
              identificationType,
            } = cardForm.getCardFormData();

              api.post(`/process-payment`,{
                token,
                issuer_id,
                payment_method_id,
                transaction_amount: course?.priceSubscription || 200,
                installments: Number(installments),
                description: course?.title,
                payer: {
                  email,
                  identification: {
                    type: identificationType,
                    number: identificationNumber,
                  },
                },
              })
              .then((response) =>{
                setResultPayment(response.data)
                api.post(`/course_payment/${query.id}`,{
                email:email,
                course:"muito top2",
                name:user?.name,
                cpf:identificationNumber
                })
              })
              .catch((err) => {
                setResultPayment(err);
              });
              
          },
          onFetching: (resource:any) => {
              // Animate progress bar
              const progressBar =
                document.querySelector(".progress-bar");
                progressBar?.removeAttribute("value");

                console.log(progressBar)
              return () => {
                  progressBar?.setAttribute("value", "0");
              };
          },
          onError:(err:any) =>{
            console.log(err)
          }
        },
      });
    }
}, [MercadoPago, course?.priceSubscription, course?.title, mercadoPago, query.id, user?.name]);

  return (
    <MpContext.Provider value ={{getCourse,generateQrCod,setTypePayment,mercadoPago}}>
      {children}
    </MpContext.Provider>
  )
}

function useMercadoPago(type?:string): MpContextState{
  const context = useContext(MpContext)
  if(type) context.setTypePayment(type)

  if(!context) {
    throw new Error('insira o MpProvider ao redor do seu elemento')
  }
  return context
}

export { MpProvider, useMercadoPago }

