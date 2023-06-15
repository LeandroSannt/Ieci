import React from 'react'
import {Container,Content} from './styles'
import Front from './Front'
import Back from './Back'
import ReactCardFlip from "react-card-flip";
import {useCard} from '../../hooks/useCard'

const CardFlip:React.FC = () =>{

    const {isFlipped}  = useCard()

  return(
      <ReactCardFlip  isFlipped={isFlipped} flipDirection="horizontal">
        
        <Container className="CardFront" >
          <Content>
            <Front/>
          </Content>
        </Container>

        <Container className="CardBack" >
          <Content  >
            <Back/>
          </Content>
        </Container>

      </ReactCardFlip>
  )
}

export default CardFlip