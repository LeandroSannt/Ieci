import React, {useEffect, useState} from 'react'
import {Container} from './styles'
import Image from 'next/image'
import menDefault from '../../../assets/menDefault.png'
import womanDefault from '../../../assets/womanDefault.png'


interface CardFeedbackProps{
  name:string
  avatar:string;
  feedback:string;
  gender: 'm' | 'f'
}

const CardFeedback: React.FC<CardFeedbackProps> = ({name,avatar,feedback,gender})=>{

  const [avatarUser,setAvatarUser] = useState(avatar || menDefault.src )

  // useEffect(() =>{

  // if(!avatar && gender === 'm'){
  //   setAvatarUser(menDefault)
  // }

  // if(!avatar && gender === 'f'){
  //   setAvatarUser(womanDefault)
  // }

  //  },[])
  


  return(
    <Container>
      <div className='contentImg'>

        {avatar && <Image src={avatar} alt={name} width={50} height={79}/>}
      </div>

      <div className='feedback'>
        <h5>{name}</h5>
        <p>
          “{feedback}”.
        </p>
      </div>
    </Container>
  )
}

export default CardFeedback