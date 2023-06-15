import React from 'react'
import {Container,Header,InformationsSuccess} from './styles'
import bg from '../../../../../assets/pana.svg'
import animation from '../../../../../assets/animation_second.gif'
import { MdClose } from 'react-icons/md';
import {ProgressPayment} from '../../../../../components'



const Finished:React.FC = () =>{
  return(
      <Container>
        <Header
          style={{backgroundImage: `url(${bg.src})`,
          backgroundRepeat:'no-repeat',
          backgroundPosition:"center",
          backgroundSize:"contain"}}> 
          <span><MdClose/></span>
        </Header>

        <ProgressPayment progress='finished'/>

        <InformationsSuccess>

        <div className='success'>
          <h2>Parabéns!</h2>
          <p>Você acaba de dar um novo passo na sua carreira.</p>
        </div>

        <div className='bg' style={{backgroundImage: `url(${animation.src})`}}></div>

        <div className='finishedInscrition'>
          <h4>Sua inscrição foi realizada com sucesso!</h4>
          <p>
            Agora é só aguardar nosso e-mail de confirmação para acessar seu ambiente de estudos {` :) `}
             Não se esqueça de checar a caixa de spam!
          </p>
        </div>

        </InformationsSuccess>

        
      </Container>
  )
}

export default Finished