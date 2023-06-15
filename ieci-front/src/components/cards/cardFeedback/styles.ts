import styled from 'styled-components'

export const Container = styled.div`
position: relative;

display: flex;
align-items: center;
justify-content: center;

width: 400px;
min-width: 300px;
min-height: 300px;

border: 6px solid #C69EEE;
box-sizing: border-box;
box-shadow: 0px 0px 20px #D9BCE6;
border-radius: 100px;
margin-bottom: 100px;
margin-top: 60px;
margin-left: 20px;

  @media (max-width: 760px) {
    width: 272px;
    min-height: 180px;
    border-radius: 64px;
  }



.contentImg{
  top: -67px;
  left: 38%;
  position: absolute;
  overflow: hidden;
  background: #965FC1;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 760px) {
    top: -65px;
    left: 33%;
  }

  img{
    object-fit: cover;
  }

   
}

.feedback{
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 281px;

  h5{
  font-weight: 700;
  line-height: 32px;
  color: #EFDBFE;
  margin-bottom: 20px;

  @media (max-width: 760px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
}


  p{
    font-style: italic;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    text-align: center;


    @media (max-width: 760px) {
    font-size: 16px;
    line-height: 19px;
  }
  }
}




`
