import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
min-height: 100vh;
padding: 0 4%;
margin-top: 80px;


@media(max-width:680px ){
  margin-top: 50px;
}

h2{
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 56px;
color: #62498A;

  @media(max-width:680px ){
    font-size: 28px;
    line-height: 38px;
  }
}

header{
  display: flex;
  justify-content: space-between;

  >div{
    display: flex;
    display: flex;
    align-items: center;
    color: #965fc1;
    font-size: 20px;

      @media(max-width:680px ){
        span{

          font-size: 14px;
        }

      }
     
      svg{
        margin-left:5px
      }
  }
}
`
export const Courses = styled.div`
margin-top: 24px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;

max-height: 100vh;
margin-bottom: 60px;

@media(max-width:1500px ){
  grid-template-columns: 1fr 1fr;
}

@media(max-width:1115px ){
  grid-template-columns: 1fr;
}

@media(max-width:648px ){
  place-content:center;
  max-height: initial;
}

overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`