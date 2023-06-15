import React, { Fragment, useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { useQuery } from 'react-query';
import { Spinner } from '../../components';
import { CardCoures } from '../../components/cards';
import { useLang } from '../../hooks/useLang';
import api from '../../services/api';
import { CoursesProps } from '../../Types';
import { Container, Courses } from './styles';

import { v4 as uuid } from 'uuid';
import Subjects from '../subjects';

interface CourseProps{
  category_id:number
  filterCourse:string
}

interface FiltersProps{
  order?:'asc' | 'desc'
}

const ListCourses:React.FC<CourseProps> = ({category_id,filterCourse}) =>{
  const [courseId,setCourseId] = useState(0)
  const [ filters,setFilters] = useState<FiltersProps>({order:'asc'})

  const [courses, setCourses] = useState<CoursesProps[]>([])

  const {t} = useLang()

  const { refetch: refetchCompanies,isLoading } = useQuery<CoursesProps[]>(['courses',category_id,filterCourse,filters.order], async () =>{
    const response = await api.get('/course',{
      params:{
        category_id,
        title:filterCourse,
        order:filters.order
      }
    })
    return response.data
  },{
    onSuccess: (data: CoursesProps[]) => setCourses(data),
    refetchOnWindowFocus:false
  })

  const alterFilters = () =>{
    if(filters.order === 'asc'){
      setFilters({order:'desc'})
    }else{
      setFilters({order:'asc'})
    }
  }

  if(!courses){
    return (
      <section className='flex justify-center items-center w-full h-screen'>
        <Spinner/>  
      </section>
    )
  }

  return(
    <Container>

      {isLoading && <Spinner/>}
      <header>
        <h2>{courses[0]?.category?.name}</h2>
        <div className='cursor-pointer' onClick={alterFilters}>
          <span>{t.CURSOS.ORDER}</span>
          <IoIosMenu/>
        </div>
      </header>

      <Courses>
        {
          courses?.map((course,index) =>{
            return(
              <Fragment key={course.id}>
                <CardCoures hasArea={false} key={uuid()} course={course} activeModal={setCourseId} />

                {course.id === courseId && 
                  <Subjects key={course.id}  subject={course.subject} courseTitle={course.title} courseId={course.id}  />
                }
              </Fragment>
            )
          })
        }
      </Courses>
    </Container>
  )
}

export default ListCourses