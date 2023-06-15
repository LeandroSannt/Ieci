import React from 'react'
import address from '../../assets/register_second.svg'
import register from '../../assets/cadastro_first.svg'
import finalizado from '../../assets/terceiro.svg'

interface ProgressPayment{
  progress: 'register' | 'address' | 'finished'
}

const ProgressPayment:React.FC<ProgressPayment> = ({progress}) =>{

  const typeSrc = {
    register: `url(${register.src})`,
    address: `url(${address.src})`,
    finished: `url(${finalizado.src})`
  }

  return( 
    <div
    style={{
      width: '100%',
      maxWidth: '1100px',
      backgroundImage: typeSrc[progress],
      margin: '40px auto 0 auto ',
      minHeight: '250px' ,
      backgroundRepeat:'no-repeat',
      backgroundSize: '90%',
      backgroundPosition:'50%'
          
      }}></div>
  )
}

export default ProgressPayment