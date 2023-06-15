import styled from 'styled-components'

export const Container = styled.div`
height: calc(100vh - 110px);
background: #fff;

display: flex;
align-items: center;
justify-content: center;

form{
  max-width: 500px;

  h2{
    text-align: center;
    font-size: 48px;
    line-height: 56px;
    color: #575757;
    margin-bottom: 40px;
  }

  .btnLink{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    span{
      margin-top: 16px;
      text-align: end;

      font-weight: 400;
      font-size: 20px;
      line-height: 32px;

      color: #62498A;


      a{
        margin-left: 5px;
        font-family: 'Inter';
        font-size: 20px;
        border-bottom: solid 1px #62498A;
      }
    }
  }


}
`