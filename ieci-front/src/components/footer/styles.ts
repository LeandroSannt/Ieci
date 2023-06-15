import styled from "styled-components";

const Container = styled.footer`
width:100% ;
min-height: 321px;
background-color: #62498A;

  .content{
    max-width: 1100px;
    width: calc(100%);
    height: 100%;
    display: flex;
    margin: 0 auto;

    .secondtab{
      display: flex;
      justify-content: center;
      align-items: center;
      

      @media (max-width: 760px){
      flex-direction: column;
      border-left: #62498A solid 1px;
      margin-right: 25px;
      }
    }
  }

`

const Sobre = styled.div`

margin: 30px 32px;

@media (max-width: 760px){
  margin: 20px 32px;
  max-width: 240px;
}

img{
  margin-bottom: 32px;
}

  h5{
    line-height: 32px;
    color: #EFDBFE;

     @media (max-width: 760px){
      font-size: 18px;
      line-height: 21px;
      }
  }

  p{
    max-width: 471px;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;

    color: #C69EEE;

    margin-top:16px;

    @media (max-width: 760px){
      font-size: 12px;
      line-height: 21px;
      }
  }

`

const Links = styled.ul`
margin: 30px 32px;
font-family: 'Inter' !important;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
color: #EFDBFE;
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 321px;

border-left: 1px solid #965FC1;
padding-left:40px ;


div{
  li + li {
    margin-top: 24px;

    @media (max-width: 760px){
    margin-top: initial;
  }
  }
}

  @media (max-width: 760px){
    margin: 0px;
    padding-top: 101px;
    justify-content: flex-end;
    flex-direction: column-reverse;
  }

  a{
    font-family: 'Inter';
    font-size: 1.125rem;
    transition: all 200ms;

      @media (max-width: 760px){
        font-size: 12px;
      }

    &:hover{
      filter: brightness(0.8);
    }
  }

  .contact{
    h6{
      font-size: 1.125rem;

      @media (max-width: 760px){
        font-size: 12px;
        line-height: 15px;
      }
    }

    p{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 24px;
      color: #C69EEE;

        @media (max-width: 760px){
          font-size: 12px;
        }
    }

    p+p{
      margin-top: 16px;
    }

    @media (max-width: 760px){
      li{
        p{
          margin-top: 0;
        }
      margin-bottom: 20px;
      }
    }
  }

`

const Sociais = styled.div`
max-width: 152px;
max-height:321px;
margin: 30px 32px;

display: flex;
justify-content: flex-end;
flex-direction: column;
align-items: flex-start;

margin-top: auto;

  @media (max-width: 760px){
    margin-top: initial;
    margin-bottom: 0;
    padding-left:40px ;
    margin-left: 0px;
    margin-right: -5px !important;
    border-left: 1px solid #965FC1;
    justify-content: start;
    flex: 1;

  }

    h6{
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: #EFDBFE;

      @media (max-width: 760px){
        margin-top: 32px;
        font-size: 12px;
      }
    }

  div{
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 760px){
      margin-top: 16px;
      font-size: 12px;
    }
  }

`

export {Container,Sobre,Sociais,Links}