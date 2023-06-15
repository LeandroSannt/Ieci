import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LeanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import PTBR from './locales/pt'
import { InitialSection } from '../pages/home/styles'

i18n.use(Backend).use(LeanguageDetector).use(initReactI18next).init({
  backend:{
   // translation
   loadPath:"./locales/{{lng}}.json"
  },
  fallbackLng:'pt',
  debug:false,
  ns:["home"],
  interpolation:{
    escapeValue:false,
    formatSeparator:","
  }
 
})

export default i18n