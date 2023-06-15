import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center;
cursor: pointer;

svg{
  transition: all 400ms;
  &:hover{
    transform: scale(1.2);

  }
}

label{
  margin: 0 5px 0 20px; 
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  color: #62498A;
}

input{
  font-size: 18px;
  color:"#2C2C2C";

  border:none;
  outline: none;
  background-color: inherit;

}

& + & {
  margin-top:20px ;
}
`

