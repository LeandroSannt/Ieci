import styled from 'styled-components'

export const Container = styled.header`
width: 100%;
min-height:40vh ;
background-color: #62498A;

`

export const Content = styled.div`
  max-width:1100px;
  width:90%;
  height: 100%;

  background-repeat: no-repeat;
  background-position:100% 70%;
  background-size: 35%;

  @media(max-width:648px ){
  background-position:120% 70%;

    background-size: 70%;
  }

  margin: 0 auto;
  padding: 25px 0 43px 0;
  >div{
    &:nth-child(1){
      display: flex;
      justify-content: space-between;
      width: 60%;

      @media(max-width:648px ){
        width: 100%;
      }

      span{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #EFDBFE;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 200ms;

        &:hover{
          background-color:inherit;
          border: solid 2px  #EFDBFE;
          svg{
            color: #EFDBFE;
          }
        }

        svg{
          font-weight: bold;
          color:#62498A;

        }
      }

      p{
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        color: #C69EEE;

        display: flex;
        align-items: center;

        @media(max-width:648px ){
          width:100%;
          justify-content: center;
        }

        @media(max-width:460px ){
          font-size: 16px;
        }
      }
    }

    &:nth-child(2){
      margin-top: 40px;
      
      @media(max-width:460px ){
        margin-top: 22px;
      }
      h2{
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
        color: #EFDBFE;

        @media(max-width:648px ){
          font-size:36px;
          line-height: 42px;
        }

        @media(max-width:460px ){
          font-size:24px;
          line-height: 32px;

        }
      }
      p{
        margin-top: 19px;
        display: flex;
        align-items: center;
        font-size: 24px;
        line-height: 24px;
        color: #FAF7FC;
        svg{
          margin-right: 5px;
        }

        @media(max-width:648px ){
          font-size:18px;
          line-height: 26px;
        }

        @media(max-width:460px ){
          font-size:12px;
          line-height: 24px;
        }
      }
    }

    &:nth-child(3){

      margin-top: 42px;
      border: 2px solid #EFDBFE;
      box-shadow:0px 0px 10px #D9BCE6;
      border-radius: 24px;
      padding: 16px 20px;
      max-width: 70%;

      @media(max-width:460px ){
        max-width: 250px;
        margin-top: 22px;
      }

      h3{
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #FAF7FC;

        @media(max-width:648px ){
          font-size:32px;
          line-height: 40px;
        }

        @media(max-width:460px ){
          font-size:16px;
          line-height: 22px;
        }
      }

      .infoUser{
        display: flex;
        flex-direction: column;
        color: #fff;

        label{
          font-size: 24px;
          line-height: 32px;
           
          span{
            margin-left: 10px;
          }
        }
      }
      

      
    }
  }


`