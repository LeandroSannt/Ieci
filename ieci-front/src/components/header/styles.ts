import styled from 'styled-components'

const Header = styled.header`
  max-width: 90%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .contentImg{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:36px ;
    transition: all 400ms;
    cursor: pointer;

    &:hover{
      transform: scale(1.1);
      opacity: 0.8;
    }

    @media (max-width: 530px){
      width: 64px !important;
      height: 28px;
      margin-left: 20px;
      font-size: 16px;
    }
  }

`

const Menu = styled.div`
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  min-height: 96px;

  @media (max-width: 760px){
    width: 50%;

    a{
      font-size: 18px;
    }
  }

  @media (max-width: 530px){
    width: 70%;
    margin-right: 0;

    a{
      font-size: 18px;
    }
  }

  .activeNavLink{
    color: #62498A;
    font-weight: bold;
  }

`

export { Header, Menu }
