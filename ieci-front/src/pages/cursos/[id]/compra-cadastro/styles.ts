import styled from 'styled-components'

export const Container = styled.div`
background-color: #fff;

  form{
    max-width: 720px;
    width: 90%;
    margin: 0 auto;

    h5{
      font-size: 24px;
      line-height: 32px;
      color: #6F6F6F;
      margin-bottom: 40px;
    }

    span{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 12px;
      margin-top: 16px;
      color: #965FC1;

      svg{
        margin-right: 5px;
      }
    }
  
  }

  .bg{
    margin-top: -150px;
    width: 100%;
    min-height:600px ;
    background-repeat: no-repeat;
  }

`