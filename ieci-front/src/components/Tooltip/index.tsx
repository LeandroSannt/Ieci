import React from 'react';
import {Container} from './styles'

interface TooltipProps{
  children?: React.ReactNode;
  title:string;
  className?:string;
}

const Tooltip: React.FC<TooltipProps> = ({title,className,children}) =>{
  return (
    <Container className={className}>

      {children}
      <span>{title}</span>

    </Container>
  )
}
export default Tooltip;