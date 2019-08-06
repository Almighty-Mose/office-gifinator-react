import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    margin: 0 auto;
    padding: 20px;
    background-color: #282c34;
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