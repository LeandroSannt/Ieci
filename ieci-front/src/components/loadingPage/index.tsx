import React from 'react'
import Spinner from '../spinner'

import { Container } from './styles'
const LoadingPage:React.FC = () =>{
  return(
    <Container>
      <Spinner type='line'/>
    </Container>
  )
}
export default LoadingPage