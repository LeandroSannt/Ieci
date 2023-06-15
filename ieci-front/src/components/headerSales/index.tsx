import Link from 'next/link';
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { MdArrowBackIosNew, MdOutlineWatchLater } from 'react-icons/md';

import { useLang } from '../../hooks/useLang';
import { Container, Content } from './styles';

interface headerSalesProps{
  routerPush:string
  hasTitle?:boolean
  title?:string
  imgCourse:string
  valueRegistration?:string
  duration?:{
    totalHours?:number
  }
  userData?:{
    email:string
    cpf?:string
    course:string
  }

}

const headerSales:React.FC<headerSalesProps> = ({hasTitle = true,routerPush,title,imgCourse,valueRegistration,duration,userData}) =>{
  const {t} = useLang()
  return(
    <Container>
      <Content style={{
        backgroundImage: `url(${imgCourse})`,
      }}>

        <div>
          <Link href={routerPush} passHref>
            <a>
              <span><MdArrowBackIosNew /></span>
            </a>
          </Link>
          {hasTitle &&
            <p>
              {t.PURCHASE_REGISTRATION.INFORMATIONS}
            </p>
           } 
        </div>

        <div>
          <h2>{title}</h2>
          {!!valueRegistration  &&
            <p><MdOutlineWatchLater/> {t.PURCHASE_REGISTRATION.DURATION} {duration?.totalHours}h </p>
          }
        </div>
        
        <div>
          {
            !!valueRegistration  ?
            <h3>
              {t.PURCHASE_REGISTRATION.REGISTRATION} R$ {valueRegistration},00
            </h3>
            :
            <div className='infoUser'>
              <label htmlFor="">{t.PURCHASE_REGISTRATION.EMAIL}
                <span>{userData?.email}</span>
              </label>

              {/* <label htmlFor="">{t.PURCHASE_REGISTRATION.CPF}
                <span>{userData?.cpf}</span>
              </label> */}

              <label htmlFor="">{t.PURCHASE_REGISTRATION.COURSE}
                <span>{userData?.course}</span>
              </label>
            </div>
          }
          
        </div>
      </Content>
    </Container>
  )
}

export default headerSales