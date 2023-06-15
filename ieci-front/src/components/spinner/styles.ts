import styled from 'styled-components'
import spinnerCircle from '../../assets/loading.gif'
import spinnerBarra from '../../assets/3dotsAnimate.gif'

interface SpinnerProps{
  size:string
}
export const Container = styled.div<SpinnerProps>`

z-index: 9999;
width: ${(props) =>props.size};
height: ${(props) =>props.size};

background-position: center;
background-size: cover;
`