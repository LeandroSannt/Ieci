import React, {useState} from 'react'

import { Container } from './styles'
import copy from "copy-to-clipboard";
import { useToast } from '../../hooks/useToast'
import {Copy} from '../icons'

interface CopyLabelProps{
  value?:string
  label:string

}
const CopyLabel:React.FC<CopyLabelProps> = ({label,value}) =>{
  const {notify} = useToast()

  const copyToClipboard = () => {

    if(value){
      copy(value);

      notify({
        message:`${value} esta na sua área de transferencia` ,
        types:'success'
      })
    }
    
  }

  return(
    <Container >
      <button onClick= {copyToClipboard}>
        <Copy />
      </button>
      <label>{label}:</label>
      <input type="text" readOnly value={value} />
    </Container>
  )
}
export default CopyLabel