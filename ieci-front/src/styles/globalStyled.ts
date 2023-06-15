import { createGlobalStyle,css } from "styled-components";

interface SidebarProps{
  sidebarActive:boolean
}

export default createGlobalStyle<SidebarProps>`

html,
body {

  ${props =>
    props.sidebarActive ?
    css`
      overflow: hidden ;
    `
    :
    css`
      overflow: initial ;
    `
  }
}

`;