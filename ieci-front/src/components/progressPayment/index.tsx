import React from 'react'
import finalizado from '../../assets/finalizado.svg'
import cadastro from '../../assets/fluxo.svg'
import pagamento from '../../assets/pagamento.svg'
import { Container } from './styles'

interface ProgressRegister{
  progress: 'register' | 'payment' | 'finished'
}

const ProgressRegister:React.FC<ProgressRegister> = ({progress}) =>{

  const typeSrc = {
    register: `url(${cadastro.src})`,
    payment: `url(${pagamento.src})`,
    finished: `url(${finalizado.src})`
  }

  return( 
    <Container
    style={{
      backgroundImage: typeSrc[progress],
    }}></Container>
  )
}

export default ProgressRegister