import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    margin: 0;
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    height: 100px;
    font-size: 2em;
  `

const Header = () => {
  return (
    <>
      <StyledHeader>The Office Gifinator</StyledHeader>
    </>
  )
}
export default Header