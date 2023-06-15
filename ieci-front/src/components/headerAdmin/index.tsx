import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { UserAdmin } from '../../components/icons';
import { Container } from './styles';

interface headerProps{
  children?: React.ReactNode;
  name?:string | null | undefined
  openModal?(value:boolean):void
  modal?:boolean
}

const HeaderAdmin:React.FC<headerProps> = ({modal = true ,name,openModal,children}) =>{
  return(
    <Container>
      <div className='user' onClick={() =>{modal && openModal && openModal(true)}}>

        <UserAdmin />
        <p style={{margin:"0 20px 0 20px"}}>
        {name}
        </p>
        <IoIosArrowDown  size={24}  color={'#666666'}/>
      </div>
      {children}
    </Container>
  )
}

export default HeaderAdmin