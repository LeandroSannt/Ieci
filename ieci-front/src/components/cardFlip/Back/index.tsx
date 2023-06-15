import React from 'react'
import {Container} from './styles'
import {useCard} from '../../../hooks/useCard'


const CardFlip:React.FC = () =>{

  const {codCard} = useCard()

  return(
    <Container>
      <div className='targ'></div>

      <div className='codSeg'>
        <span className='cod'>
          <h5>Cod. Segurança</h5>
          <p>{codCard}</p>
        </span>
      </div>
    
    </Container>
  )
}

export default CardFlip