import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
min-height: 100vh;
height: 100%;

`

export const Section = styled.section`
  width: 100%;
  min-height: 290px;
  background-color:#62498A ;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 auto;


   @media(max-width:648px ){
    min-height: 140px;
    background-size: 100% !important;
  }
`

export const Input = styled.div`
  width: 80%;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #FAF7FC;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;

  min-height: 72px;
  padding: 0 40px;

  @media(max-width:648px ){
    min-height: 40px;
    padding: 0 20px;
  }

    input{
      width: 100%;
      background-color: inherit;
      outline: none;
      color: #666666;
      font-size: 18px;

      @media(max-width:648px ){
        font-size: 14px;
      }
    }

`

export const CoursesCategory = styled.div`
  display: flex;

  .activeSidebar{
    margin:28px 24px 0px 24px ;
    color: #965FC1;
    align-items: center;
    cursor: pointer !important;
    display: none;

    @media(max-width:648px ){
    display: flex;  
    }

    svg{
      margin-right: 10px;
    }

    p{
      color: #965FC1;
      font-size: 16px;
      font-weight: 700;
    }
  }

  @media(max-width:648px ){
    flex-direction: column;
  }

`
