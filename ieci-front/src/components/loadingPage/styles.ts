import styled from 'styled-components'


export const Container = styled.div`
overflow: auto;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
width: 100%;
height: 100vh;
z-index: 99988;
background-color: rgba(125, 125, 125, 0.2);
-webkit-backdrop-filter: blur(5px); 
backdrop-filter: blur(5px);
`