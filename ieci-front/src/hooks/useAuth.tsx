import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { createContext, useContext, useState } from 'react'

import api from '../services/api'

type User ={
    id:number
    name:string
    avatar_url:string
    email:string
}

type SignInData= {
    email:string
    password:string
}

type AuthContextType = {
    isAuthenticated:boolean
    user:User | null
    signIn:(data:SignInData) => Promise<void>
    signOut():void
}
interface AuthState{
  token:string;
  user:User
}

interface Props{
  children:JSX.Element
}

 const AuthContext = createContext({} as AuthContextType)

 function AuthProvider({children}:Props){

    const [data,setData] =useState<AuthState>(()=>{
      const {'nextAuth.token':token} = parseCookies()
      const {'nextAuth.user':user} = parseCookies()
  
      if(token && user){
        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        return {token,user:JSON.parse(user)}
      }
  
      return {} as AuthState
    })

    const isAuthenticated = !!data.user

    async function signIn({email,password}:SignInData){
       const response = await api.post("/session",{
        email,
        password
       })

       const {userToken:{originalToken},user} = response.data

        setCookie(undefined,'nextAuth.token',originalToken,{
            maxAge: 60 * 60 * 1, // 1 hora
        })

        setCookie(undefined,'nextAuth.user',JSON.stringify(user),{
          maxAge: 60 * 60 * 1, // 1 hora
        })

        api.defaults.headers['Authorization'] = `Bearer ${originalToken}`;

        setData({token:originalToken,user})

        // Router.push('/meu-perfil')
    }

    async function signOut(){

      await api.delete('session')
      
      destroyCookie(null,'nextAuth.token')
      destroyCookie(null,'nextAuth.user')

      setData({} as AuthState)

      Router.push('/home')
    }

    console.log(isAuthenticated)

    return(
      <AuthContext.Provider value ={{isAuthenticated,signIn,signOut,user:data.user}}> 
      {children}
      </AuthContext.Provider>
    )
}

function useAuth(): AuthContextType{
  const context = useContext(AuthContext)

  if(!context) {
    throw new Error('insira o authProvider ao redor do seu elemento')
  }
  return context
}

export { useAuth, AuthProvider }

