import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Link as LinkScroll } from 'react-scroll'
import logo from '../../assets/logo.png'
import { useLang } from '../../hooks/useLang'
import { NavLink } from '../navLink'
import { Header, Menu } from './styles'

import { useAuth } from '../../hooks/useAuth'
import Button from '../button'


const Heade:React.FC = () =>{
  const {t} = useLang()
  const {user,isAuthenticated} = useAuth()

      const textButton = isAuthenticated ? {text:'MEU PERFIL',route:'/meu-perfil'} :  {text:`${t.GLOBAL.BUTTON.LOG_IN}`,route:'/login'} 
    console.log(textButton)

  return(
    <Header >
      <Link  href={'/home'} passHref>
        <a>
        <div className='contentImg' >
          <Image
            src={logo}
            alt="Picture of the author"
            width="124px"
            height="56px"
            className='ml-9'
          />
        </div>
        </a>
      </Link>
      <Menu >

        <li className='text-black900 hover:text-black100 list-none'>
          <NavLink href="/cursos"  activeClassName="activeNavLink">
            <a>{t.GLOBAL.HEADER.COURSE}</a>
          </NavLink>
        </li>

        <li className='text-black900 hover:text-black100 list-none cursor-pointer'>
          <LinkScroll to ="contatos" spy={true} smooth={true} offset={50} duration={500} >{t.GLOBAL.HEADER.CONTACT}</LinkScroll>
        </li>
        <div>
          <Link href={textButton.route} passHref>
            <Button typeButton={'secondary'} text={textButton.text} type="submit"/>
          </Link>
        </div>
      </Menu>

     </Header>
  )
}

export default Heade