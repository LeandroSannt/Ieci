import React,{createContext, useState,useContext, useEffect} from 'react'
import { useQuery } from 'react-query';
import api from '../services/api';
import { queryClient } from '../services/queryClient';
import { CoursesProps } from '../Types';
interface SidebarContextState{
  isActive:boolean
  isActiveSubjects:boolean
  openSidebar():void
  closeSidebar():void
  openSidebarSubjects(current_curse_id:number):void
  closeSidebarSubjects():void
}

interface Props{
  children:JSX.Element | JSX.Element
}

//iniciando um contexto vazio precisa colocar o as e o nome da interface
const SidebarContext = createContext<SidebarContextState>({} as SidebarContextState)

const SidebarProvider = ({children}:Props) => {

  const [isActive,setIsActive] = useState(false)
  const [isActiveSubjects,setIsActiveSubjects] = useState(false)

  const openSidebar = () =>{
    setIsActive(true)
  }

  const closeSidebar = () =>{
    setIsActive(false)
  }


  const openSidebarSubjects = async (current_curse_id:number) =>{
    setIsActiveSubjects(true)
  }

  const closeSidebarSubjects = () =>{
    setIsActiveSubjects(false)
  }

  return (
    <SidebarContext.Provider value ={{openSidebarSubjects,closeSidebarSubjects,closeSidebar,openSidebar,isActive,isActiveSubjects}}>
      {children}
     </SidebarContext.Provider>
  )
}

function useSidebar(): SidebarContextState{
  const context = useContext(SidebarContext)

  if(!context) {
    throw new Error('insira o authprovider ao redor do seu elemento')
  }
  return context
}

export {SidebarProvider, useSidebar}