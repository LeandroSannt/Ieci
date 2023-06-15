import React, { HTMLAttributes } from 'react';
import { Button } from '../../';
import farmacia from '../../../assets/farmacia.png';
import { AreasProps } from '../../../Types';
import { Container } from './styles';

interface CardCourseProps extends HTMLAttributes<HTMLDivElement>{
  modelTwo?:boolean
  hasArea?:boolean
  area:AreasProps
}

const CardArea: React.FC<CardCourseProps> = ({modelTwo = true, area, ...rest})=>{

  const totalCourses = area.course?.length

  const palavras =area.name.toLowerCase().split(" ")

  const nameFormated = palavras.map((palavra) => { 
    return palavra[0].toUpperCase() + palavra.substring(1); 
  }).join(" ");

  return(
    <Container modelTwo={modelTwo} style={{
      backgroundImage: `url(${farmacia.src})`,
      backgroundRepeat:'no-repeat',
      backgroundPosition:"100% 80%",
      backgroundSize: modelTwo? '45% 90%':''}}>
      <div {...rest} className='flex flex-col content-between h-screen'>
        <div>
          <h4 className='text-ellipsis' >{nameFormated}</h4>
          {modelTwo ||
          <p>{totalCourses} Cursos</p>
          }
        </div>
        {modelTwo || 
        <div className='btn-card'>
          <Button typeButton={'fifth'} text={'Ver cursos'}/>
        </div>
        }
        
      </div>

    </Container>
  )
}

export default CardArea