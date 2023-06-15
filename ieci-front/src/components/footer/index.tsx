import React from 'react'
import {Container,Sobre,Links,Sociais} from './styles'
import face from '../../assets/face.svg'
import wpp from '../../assets/wpp.svg'
import insta from '../../assets/insta.svg'
import linkedin from '../../assets/linkedin.svg'
import logo from '../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import {useLang} from '../../hooks/useLang'


const Footer:React.FC = () => {
  const {t} = useLang()
  return(
    <Container id={'contatos'}>

      <div className='content'>
        <Sobre>
          <div className='mb-8'>
          <Image
            src={logo}
            alt="Picture of the author"
            width="95px"
            height="42px"
            className='ml-9'
          />
          </div>
          <h5>{t.GLOBAL.FOOTER.ABOUT}</h5>
          <p>{t.GLOBAL.FOOTER.TEXT_ABOUT_ONE}<br/><br/> {t.GLOBAL.FOOTER.TEXT_ABOUT_TWO}</p>
        </Sobre>

        <div className='secondtab'>
          <Links>
            <div>
              <li>
                <Link href="#">
                  <a>{t.GLOBAL.FOOTER.COURSES}</a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a>{t.GLOBAL.FOOTER.PARTNERS}</a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a>{t.GLOBAL.FOOTER.MAIN_DOUBTS}</a>
                </Link>
              </li>

              <li>
                <Link href="#">
                  <a>{t.GLOBAL.FOOTER.NEWSLETTER}</a>
                </Link>
              </li>
            </div>

            <div className='contact'>
              <a >{t.GLOBAL.FOOTER.CONTACT_US}</a>
              <li className='mt-4'>
                <p>{t.GLOBAL.FOOTER.TELEPHONE}</p>
                <p>{t.GLOBAL.FOOTER.EMAIL}</p>
              </li>
            </div>
          </Links>

          <Sociais>
            <h6>{t.GLOBAL.FOOTER.SOCIAL}</h6>
            <div>
              <Image
                src={wpp}
                alt="wpp"
                width="26px"
                height="26px"
              />

              <Image
                src={insta}
                alt="instagram"
                width="26px"
                height="26px"
              />

              <Image
                src={face}
                alt="facebook"
                width="26px"
                height="26px"
              />

              <Image
                src={linkedin}
                alt="linkedin"
                width="26px"
                height="26px"
              />
            </div>
          </Sociais>
        </div>


      </div>

    </Container>
  )
}

export default Footer