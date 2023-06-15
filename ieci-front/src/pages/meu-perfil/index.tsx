import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React, { Fragment } from 'react'
import { useQuery } from 'react-query'

import { Button, Footer, Header } from '../../components'
import { Clock, LogOut } from '../../components/icons'
import { useAuth } from '../../hooks/useAuth'
import api from '../../services/api'
import { UserCoursesProps } from '../../Types'
import { Card, Container, LogOutBtn } from './styles'

const MeuPerfil:React.FC = () =>{
  const {user,signOut} = useAuth()

  const {data,isLoading} = useQuery<UserCoursesProps>(['userCoursesList'], async () =>{
    const response = await api.get(`/users/${user?.id}/courses`)
    return response.data
  })
  

  return(
    <>
    <Header/>
      <Container>
        {data?.userCourses?.map((course) =>{
          return(
            <Fragment key={course.id}>
              <Card >
                <div> 
                  <h3>{course.paidCourse.title}</h3>
                  <p><Clock/> Duração: {course.paidCourse.total_sum}h</p>
                </div>
                <section className={'w-56'}>
                  <Button  typeButton='primary' text='Ir para plataforma'/>
                </section>
              </Card>
            </Fragment>
          )
        })}
        <LogOutBtn onClick={signOut}>Sair<LogOut/></LogOutBtn>
      </Container>
      <Footer/>
    </>
  )
}
export default MeuPerfil

export const getServerSideProps: GetServerSideProps = async (ctx) =>{
  const {['nextAuth.token']:token} = parseCookies(ctx)

  if(!token){
    return{
      redirect:{
        destination:'/login',
        permanent:false
      }
    }
  }
  return{
    props:{}
  }
}