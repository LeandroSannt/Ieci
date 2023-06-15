import Script from 'next/script'
import React, { createContext, useContext, useState } from 'react'
interface ScriptContextState{
  MercadoPago:any
}
interface Props{
  children:JSX.Element
}

//iniciando um contexto vazio precisa colocar o as e o nome da interface
const ScriptContext = createContext<ScriptContextState>({} as ScriptContextState)

const ScriptProvider = ({children}:Props) => {

  const [MercadoPago,setMercadoPago] = useState<any>(null)

  return (
    <ScriptContext.Provider value ={{MercadoPago}}>
      <Script
        id="mp-js"
        src="https://sdk.mercadopago.com/js/v2"
        onLoad={() => {
          setMercadoPago(new (window as any).MercadoPago('TEST-4ec128f1-2ff0-4bff-a1f4-1b0f11691da0'))
        }}
        />
      {children}
     </ScriptContext.Provider>
  )
}

function useScript(): ScriptContextState{
  const context = useContext(ScriptContext)

  if(!context) {
    throw new Error('insira o ScriptProvider ao redor do seu elemento')
  }
  return context
}

export { ScriptProvider, useScript }

