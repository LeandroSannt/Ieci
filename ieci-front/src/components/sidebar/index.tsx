import React from 'react'
import {Container} from './styles'
import {CardArea} from '../cards'
import { AiOutlineClose } from 'react-icons/ai';
import {useSidebar} from '../../hooks/useSidebar'

import { useQuery } from 'react-query';
import api from '../../services/api'

import {AreasProps} from '../../Types'
import {ClipLoader} from "react-spinners";
import { v4 as uuid } from 'uuid';

interface SidebarProps{
  setFindCourses?(value:number):void
}

const Sidebar:React.FC<SidebarProps> = ({setFindCourses}) =>{
  const {isActive,closeSidebar} = useSidebar()

  const {data,isLoading} = useQuery<AreasProps[]>('category', async () =>{
    const response = await api.get('/category')
    return response.data
    }
  )

  return(
    <Container isActive={isActive} >
      <div className='backgroundBlur'>
        <h4 className='h4'>Categorias <span onClick={() =>{closeSidebar()}}><AiOutlineClose/></span></h4>
        <div className='overflow'>
          {isLoading && 
          <div className='flex justify-center items-center'>
            <ClipLoader color='#965FC1' size={50}/> 
          </div>
          }
          {data?.map((area,index) =>{
            return(
              <CardArea key={uuid()} area={area} onClick={() =>  setFindCourses && setFindCourses(area.id)}/>
            )
          })}
          
        </div>
        <div className='filter'></div>
      </div>


    </Container>
  )
}

export default Sidebar