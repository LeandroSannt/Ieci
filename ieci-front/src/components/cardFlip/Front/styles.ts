import styled from 'styled-components'

export const Container = styled.div`
height: 272px;




svg{
  width: 80px;
  height: 72px;

  margin-left:29px ;

  @media(max-width:648px ){
    width: 50px;
    height: 50px;
  }
}

.numCart{
  margin-top: 40px;

  @media(max-width:648px ){
      margin-top:10px;
    }

  h3{
    font-weight: 700;
    font-size: 35px;
    line-height: 48px;
    /* or 120% */


    /* Background/02 */

    color: #F4EDFA;

    text-align: center;
    letter-spacing: 6px;

    @media(max-width:648px ){
    line-height: 40px;

      font-size:24px;
    }

  }
}

.expiration{
  margin-top: 32px;
  margin-right: 56px;

  @media(max-width:648px ){
    margin-top: 0px;
  }

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

    @media(max-width:648px ){
      font-size:12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

`
