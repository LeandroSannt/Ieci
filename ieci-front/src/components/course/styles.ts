import styled from "styled-components";

export const Container = styled.div`
background: #62498A;
border-radius: 24px;

color: #EFDBFE;
font-family: 'Fresca';
font-weight: 400;
font-size: 18px;
line-height: 21px;

padding: 8px 16px;

& + &{
  margin-left: 24px;

  @media (max-width: 760px){
    margin-left: 8px;

}
}

@media (max-width: 760px){
  font-size:14px;
}



`