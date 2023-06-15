import React, { useEffect, useState } from 'react'
import spinnerLine from '../../assets/3dotsAnimate.gif'
import spinnerCircle from '../../assets/loading.gif'
import { Container } from './styles'

interface SpinnerProps{
  size?:string
  type?:'line' | 'circle'
}

const Spinner:React.FC<SpinnerProps> = ({size = '100px',type}) =>{
  const [spinnerType,setSpinnerType] = useState('')

  useEffect(() =>{
    
    if(type === 'line'){
      setSpinnerType(spinnerLine.src)
    }else{
      setSpinnerType(spinnerCircle.src)
    }
  },[type])



  return(
    <Container className='mx-auto' size={size} style={{backgroundImage: `url(${spinnerType})`}}>
    </Container>
  )
}
export default Spinner