import moment from 'moment'
import router from 'next/router'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { HeaderAdmin, Modal, Spinner } from '../../components'
import { All, Cadastrados, Matriculados, Pending, Toogle } from '../../components/icons'
import { useAuth } from '../../hooks/useAuth'
import api from '../../services/api'
import { PaidCourses } from '../../Types'
import { Container, Filters, RadioBox, RadioContainer, Status } from './styles'

interface ModalProps{
  isActive:boolean
  person:any
  setActive:any
}

interface PeopleProps{
  id:number
  name:string
  email:string
  horario:string
  curso:string
  status:string
}

interface FiltersProps{
  status?:string
  order?:'asc' | 'desc'
}

const Administrador:React.FC = () =>{
  const {user} = useAuth()
  const [type,setType] =useState('Todos')
  const [ isActive, setActive ] = useState(false)
  const [ people,setPeople] = useState<PeopleProps>()
  const [ filters,setFilters] = useState<FiltersProps>({order:'asc',status:'Todos'})

  const {data,isLoading} = useQuery<PaidCourses[]>(['paidCourses',type,filters.order], async () =>{
    const response = await api.get('/admin/getAllUsers',{
      params:{
        status:type === 'Todos' ? null : type ,
        order:filters.order
      }
    })
    return response.data
  })

  const handleClickPeople =(id:number) =>{
    router.push({ pathname: `/administrador/administrador-ficha/${id}`});
  }

  const alterFilters = () =>{
    if(filters.order === 'asc'){
      setFilters({order:'desc'})
    }else{
      setFilters({order:'asc'})
    }
  }

  const openModal = () =>{
    setActive(true)
  }


  return(
    <>
    <HeaderAdmin name={user?.name} openModal={setActive}>
      <Filters>
        <h5>Filtros</h5>
        <RadioContainer>
          <RadioBox htmlFor="All" onClick={() => setType('Todos')} isActive={type === 'Todos'} active= 'Todos'>
                <All />
                <span>TODOS</span>
                <input name="transaction" id={"All"} type="radio" />
          </RadioBox>

          <RadioBox htmlFor="Matriculados"   onClick={() => setType('Matriculado')} isActive={type === 'Matriculado'} active= 'Matriculado'>
              <Matriculados />
              <span>MATRÍCULADOS</span>
              <input name="transaction" id={"Matriculados"}  type="radio" />
          </RadioBox>

          <RadioBox htmlFor="Pendentes"   onClick={() => setType('Pendente')} isActive={type === 'Pendente'} active= 'Pendente'>
              <Pending />
              <span>PENDENTES</span>
              <input name="transaction" id={"Pendentes"}  type="radio" />
          </RadioBox>

          <RadioBox htmlFor="Cadastrados"   onClick={() => setType('Cadastrados')} isActive={type === 'Cadastrados'} active= 'Cadastrado'>
              <Cadastrados />
              <span>Cadastrados</span>
              <input name="transaction" id={"Cadastrados"}  type="radio" />
          </RadioBox>
        </RadioContainer>
      </Filters>
    </HeaderAdmin>

    <Container>
      <header>
        <div/>
        <h4 className='ml-24'>Lista de Usuários</h4>
        
        <div className='order' onClick={alterFilters}> 
          <Toogle size={1}/>
          <span>
           Ordenar
          </span>
        </div>
        
      </header>
      <div className="">
        <div className="mt-8 mb-24 flex flex-col">
          <div className="w-full  overflow-x-auto ">
            <div className="inline-block min-w-full">
              <div className="overflow-hidden  ring-1 ring-black ring-opacity-5 ">
              {isLoading ? <div className='w-full'> <Spinner/>    </div>  
              :
                <table className="min-w-full ">
                  <thead className="hover">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-1xl font-semibold text-black180 sm:pl-6">
                        Nome
                      </th>

                      <th scope="col" className="px-3 py-3.5 text-left text-1xl  font font-semibold text-black180">
                        E-mail
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-1xl  font-semibold text-black180">
                        Horário
                      </th>

                      <th scope="col" className="px-3 py-3.5 text-left text-1xl  font-semibold text-black180">
                        Curso
                      </th>

                      <th scope="col" className=" py-3.5 text-left text-1xl pl-32  font-semibold text-black180">
                        Status
                      </th>
                    
                    </tr>
                  </thead>
                  <tbody className="">
                    {data?.map((coursePaid, coursePaidIdx) => (
                      <tr 
                      onClick= {() =>handleClickPeople(coursePaid.id) }
                      key={coursePaid.id} 
                      className={coursePaidIdx % 2 === 0 ? 'bg-gray10 ' : undefined}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {coursePaid.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{coursePaid.email}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{moment(coursePaid.created_at).format('DD/MM/YYYY')}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{coursePaid.paidCourse.title}</td>
                        <td className="flex items-center justify-center whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {coursePaid.status}
                          <Status status={coursePaid.status}> </Status>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              }

              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal user={user} activeModal={openModal} active={isActive}/>
    </Container>
    </>
  )
}


export default Administrador