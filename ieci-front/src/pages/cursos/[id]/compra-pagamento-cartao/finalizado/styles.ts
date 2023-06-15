import styled from 'styled-components'

export const Container = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #fff;

`

export const Header = styled.header`
  width: 100%;

  height:400px;

  background-color: #62498A;
  position: relative;

  span{
        position: absolute;
        right: 25%;
        top: 40px;
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
 
`

export const InformationsSuccess = styled.section`
  width: 100%;
  max-width: 1100px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


  >div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .success{

    h2{
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 56px;
      color: #62498A;
    }

    p{
      margin-top: 24px;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      color: #414141;
    }
  }

  .bg{
    width: 100%;
    max-width: 332px;
    height: 332px;
    border: solid 8px #EFDBFE;
    background-size: contain;
    margin: 56px 0;
  }
  
  .finishedInscrition{
    margin-bottom: 100px;
    h4{
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      color: #62D51C;
    }

    p{
      margin-top: 24px;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      color: #414141;
      max-width: 590px;
      text-align: center;
    }
  
  }
 

 
`