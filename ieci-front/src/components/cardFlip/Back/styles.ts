import styled from 'styled-components'

export const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: space-between;
height: 272px;

@media(max-width:648px ){
  height: 182px;

    }

svg{
  width: 80px;
  height: 72px;
}

.targ{
 width: 100%;
  height:70px;
 background-color: #C4C4C4;

 @media(max-width:648px ){
    height:50px;
  }
}

.codSeg{
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

 .cod{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 200px;
  h5{
    color: #F4EDFA;
    font-size: 20px;

    @media(max-width:648px ){
      font-size: 14px;
      margin-bottom: 0;
    }
  }

  p{
    color: #F4EDFA;
    font-size:32px;
    font-weight: bold;
    margin-top: 8px;

    @media(max-width:648px ){
      font-size:12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
   
  }

  }


`


