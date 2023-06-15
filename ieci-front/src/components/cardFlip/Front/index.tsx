import React from 'react'
import { useCard } from '../../../hooks/useCard'
import { ChipCard } from '../../icons'
import { Container } from './styles'

interface NumberCardProps{
  first:string
  second:string
  third:string
  fourth:string
}

interface Props{
  numberCard:string
  dateExpiration:Date
}

const CardFlip:React.FC = () =>{

  const {initialExpiration,changeDate,changeMonth,changeYear} = useCard()

  return(
    <Container>
      <ChipCard />
      <div className='numCart'>
        <h3>
          {initialExpiration}
        </h3>
      </div>

      <div className='expiration'>
        <div className='.cod'>
          <h5>Vencimento</h5>
          <p>{changeMonth} / {changeYear}</p>
        </div>
      </div>
   
      </Container>
  )
}

export default CardFlip