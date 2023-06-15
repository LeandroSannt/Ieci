import styled from 'styled-components'

export const Container = styled.section`
  background-color: #fff;

  form{
    max-width: 720px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

   

    h5{
      font-size: 24px;
      line-height: 32px;
      color: #6F6F6F;
      text-align: center;
      margin-bottom: 5px;

      @media(max-width:648px ){
        font-size: 20px;
        line-height: 28px;
      } 

      @media(max-width:460px ){
        font-size: 16px;
        line-height: 24px;
      } 
    }

    .informationsPaymentTitle{
      text-align: start;
      margin: 40px 0;
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

    .gridCard{
      margin: 30px 0;
      margin-top: 0;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;

      @media(max-width:648px ){
        grid-template-columns: 1fr;
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
export const PixContainer = styled.aside`
margin-top: 40px;

  .informationsPix{
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media(max-width:460px ){
        padding: 0 42px;
      } 

    h5{
      color: #6F6F6F;

      font-size: 24px;
      line-height: 32px;
      margin-bottom: 16px;

      @media(max-width:460px ){
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        width: 100%;
      } 
    }

    p{
      color: #6F6F6F;
      font-weight: bold;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      font-size: 24px;
      line-height: 32px;
      margin-bottom: 16px;

      @media(max-width:460px ){
        margin-bottom: 8px;
        font-size: 16px;
        line-height: 24px;
        width: 100%;
      } 


      
      span{
        margin-left: 5px;
        margin-top: 5px;
        font-size: 20px;
        line-height: 24px;
        color: #414141;
        font-weight: normal;
        flex: 1;
        max-width: 400px;
        
      }
    }

    
    .secondP{
      @media(max-width:460px ){
        span{
          margin: 0 10px;
          align-items: center;
          text-align: left;
          justify-content: flex-start;
          font-size: 16px;
        }
      } 

    }

    .tirthP{
      @media(max-width:460px ){
        display: flex;
        flex-direction: column;
        span{
          margin: 0 ;
          align-items: center;
          text-align: left;
          justify-content: flex-start;
          font-size: 16px;
        }
      } 

    }
  }

  .qrCode{  
    object-fit: cover;
    width: 274px;
    height: 274px;
    margin: 34px auto;
    margin-top: 20px;
  }

  .keyPix{
    margin: 0 auto;
    max-width: 500px;
    width: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4{
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      text-align: center;
      color: #62498A;
      text-transform: none !important;

      @media(max-width:460px ){
          font-size: 24px;
      } 
    }

    input{
      border: 2px solid #C69EEE;
      border-radius: 24px;
      color: #62498A;
      font-size: 18px;
      padding: 16px;
      margin: 24px 0;
      outline: none;
      width: 100%;
    }
  }
`