import React from 'react'
import { Container } from './styles'

interface CourseProps{
  text:string
}

const Course:React.FC<CourseProps> = ({text}) =>{
  return(
    <Container>
      {text}
    </Container>
  )
}

export {Course}