import React,{createContext, useState,useContext, useEffect} from 'react'
import { useRouter } from 'next/router'
import {TypesLocales} from '../i18n/locales/types'

import PTBR from '../i18n/locales/pt'
import EN from '../i18n/locales/en'

interface LangContextState{
  t:TypesLocales
}

interface Props{
  children:JSX.Element | JSX.Element
}

//iniciando um contexto vazio precisa colocar o as e o nome da interface
const LangContext = createContext<LangContextState>({} as LangContextState)

const LangProvider = ({children}:Props) => {
  const router = useRouter()
  let { locale } = router 

  const t = locale === 'pt-BR' ? PTBR : EN

  return (
    <LangContext.Provider value ={{t}}>
      {children}
     </LangContext.Provider>
  )
}

function useLang(): LangContextState{
  const context = useContext(LangContext)

  if(!context) {
    throw new Error('insira o langProvider ao redor do seu elemento')
  }
  return context
}

export {LangProvider, useLang}