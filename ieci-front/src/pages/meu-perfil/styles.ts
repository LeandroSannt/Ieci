import styled from 'styled-components'

export const Container = styled.div`
margin: 0 auto;
max-width: 1100px;
min-height: calc(100vh - 6rem);
width: 100%;
display: flex;
padding:24px ;
flex-direction: column;

`

export const Card = styled.div`
  width: 100%;
  min-height:129px;
  background: #EFDBFE;
  border-radius: 16px;
  padding: 26px 26px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width:648px ){
    flex-direction: column;
  }

  &+&{
    margin-top: 24px;
  }

  >div{
    font-size: 32px;
    line-height: 39px;
    color: #62498A;
    max-width: 700px;

    h3{
      font-size: 32px;
      @media(max-width:648px ){
        font-size: 24px;
        line-height: 28px;
        text-align: center;
      }
    }

    p{
      margin-top: 10px;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #965FC1;

      @media(max-width:648px ){
      justify-content: center;
    }
      svg{
        margin-right: 5px;
      }
    }
  }

  section{
    @media(max-width:648px ){
      margin-top: 20px;
    }
  }

`

export const LogOutBtn = styled.button`
margin-left: auto;
width: 70px;
margin-top:auto;
display: flex;
align-items: center;
justify-content: flex-end;
color: #6D42B5;
text-align: right;
transition: all 400ms;

svg{
  font-weight: bold;
  margin-left: 10px;
}
&:hover{
  filter: brightness(1.5);
}

`