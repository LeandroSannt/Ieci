import React, { useEffect, useState } from 'react';

import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useQuery } from 'react-query';
import Select from 'react-select';
import { CopyLabel, HeaderAdmin, LoadingPage } from '../../../../components';
import { useAuth } from '../../../../hooks/useAuth';
import api from '../../../../services/api';
import { PaidCourses } from '../../../../Types';
import { ColourStyles, Container, ContainerSelect, DataTable, Header, UserData } from './styles';

  const options = [
    { value: 'Cadastrado', label: 'Cadastrado' ,color: '#9BE36F'},
    { value: 'Matriculado', label: 'Matriculado' ,color: '#E05858'},
    { value: 'Pendente', label: 'Pendente', color: '#FDE351' }
  ]

  interface SelectProps{
    value:string
    label:string
    color:string
  }

const Ficha:React.FC = () =>{

  const { query } = useRouter()
  const {user} = useAuth()

  const [ valueSelect,setValueSelect] = useState<SelectProps>()
  const {data,isLoading} = useQuery<PaidCourses>(['paidCourse'], async () =>{
    const response = await api.get(`/admin/user/${Number(query.id)}`)
    return response.data
  })

  useEffect(() =>{
    api.put(`/admin/${query.id}/updatedPaidCourse`,{
      status:valueSelect?.value
    })
  },[query.id, valueSelect])

  return(
    <>
    <HeaderAdmin modal={false} name={user?.name} />
    {isLoading && <LoadingPage/>}

    <Container>
      <Header>
        <Link href='/administrador' passHref>
          <a>
            <button>
              <MdKeyboardArrowLeft />
              Voltar
            </button>
          </a>
        </Link>

      <ContainerSelect>
        <h5>Status do Usuário:</h5>
        <Select options={options} 
          styles={ColourStyles}
          isMulti={false}
          onChange={(e:any) =>{if(e)setValueSelect(e)}}
          placeholder="Selecione"
        />
      </ContainerSelect>
      </Header>

      <UserData>
        <h3>Dados do usuário</h3>
        <div className="container">
          <DataTable>
            <h5>Dados Pessoais</h5>
            <div>
              <CopyLabel label='Nome' value={data?.paidPersonalData?.name}/>
              <CopyLabel label='Curso' value={data?.paidPersonalData?.course}/>
              <CopyLabel label='Email' value={data?.paidPersonalData?.email}/>
              <CopyLabel label='CPF' value={data?.paidPersonalData?.cpf}/>
              <CopyLabel label='RG' value={data?.paidPersonalData?.rg}/>
              <CopyLabel label='Orgão Expeditor' value={data?.paidPersonalData?.dispatcher}/>
              <CopyLabel label='Data de Nascimento' value={moment(data?.paidPersonalData?.birth_date).format('DD/MM/YYYY')}/>
              <CopyLabel label='Sexo' value={data?.paidPersonalData?.gender}/>
              <CopyLabel label='Nome do Pai' value={data?.paidPersonalData?.father_name}/>
              <CopyLabel label='Nome da Mãe' value={data?.paidPersonalData?.mother_name}/>
              <CopyLabel label='Cidade de Nascimento' value={data?.paidPersonalData?.birth_city}/>
              <CopyLabel label='Nacionalidade' value={data?.paidPersonalData?.nacionality}/>
              <CopyLabel label='Telefone' value={data?.paidPersonalData?.cell_number}/>
            </div>
          </DataTable>

          <DataTable>
            <h5>Endereço</h5>
            <div>
            <CopyLabel label='CEP' value={data?.paidAddress?.cep}/>
            <CopyLabel label='Logradouro' value={data?.paidAddress?.street}/>
            <CopyLabel label='Complemento' value={data?.paidAddress?.complement}/>
            <CopyLabel label='Número' value={data?.paidAddress?.adress_number.toString()}/>
            <CopyLabel label='Bairro' value={data?.paidAddress?.district}/>
            <CopyLabel label='Estado' value={data?.paidAddress?.state}/>
            <CopyLabel label='Cidade' value={data?.paidAddress?.city}/>
            </div>
            
          </DataTable>

          <DataTable>
            <h5>Dados Acadêmicos</h5>
            <div>
              <CopyLabel label='Curso de Graduação' value={data?.paidAcademicData?.graduation}/>
              <CopyLabel label='Ano de Graduação' value={data?.paidAcademicData?.year_graduated}/>
              <CopyLabel label='Instituto de Graduação' value={data?.paidAcademicData?.institution_graduated}/>
              <CopyLabel label='Dia de Pagamento da Mensalidade' value={moment(data?.paidAcademicData?.expiration).format('DD/MM/YYYY')}/>
              <CopyLabel label='Pagamento em' value={data?.paidAcademicData?.number_months.toString()}/>
              <CopyLabel label='Material' value={'Online-Gratuito'}/>
            </div>
            
          </DataTable>
        </div>

      </UserData>
    </Container>
    </>
  )
}
export default Ficha