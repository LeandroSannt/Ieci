import React, { ButtonHTMLAttributes } from 'react'
import { Container } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton:'primary'| 'secondary'| 'tertiary' | 'fourth' | 'fifth' | 'eighth'
  text:string
}

const Button:React.FC<IButtonProps> = ({text,typeButton, children, ...rest}) =>{
  return(
    <Container typeButton={typeButton} {...rest} className="btn bg-inherit hover:bg-inherit border-0 " >
      {text}
      {children}
    </Container>
  )
}

export default Button