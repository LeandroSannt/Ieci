import styled from 'styled-components'

export const Container = styled.header`
width: 100%;
min-height:140px ;
background: #EFDBFE;
border-radius: 0 0 24px 24px;
padding: 45px 51px 0 51px;

.user{
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 180px;

  color: #666666;
  font-weight: bold;

  &:last-child{
    font-size: 100px;
  }

}


.radio-toolbar {
  margin: 10px;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar label {
    display: flex;
    align-items: center;
    margin-right: 10px;
    position: relative;
    height: 100px;
    width: 250px;
}

.radio-toolbar input[type="radio"]:checked + label::after {
  content:"";
  text-align: center;
  height:6px;
  border-radius: 20px;
  border: 4px solid #C69EEE;
  box-shadow: 0px -2px 10px rgba(98, 73, 138, 0.2);
  position:absolute;
  bottom: 0px;
  width:100%;
  right: 0;
  left: 0;
  bottom: 0;
  color:#FFF;
  text-align:center;
  animation-name: example;
  animation-duration: 400ms;
}

`
