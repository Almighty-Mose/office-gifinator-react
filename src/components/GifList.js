import React from 'react'
import styled from 'styled-components'

const StyledGif = styled.img`
  width: 25%;
  height: 25%;
  padding: 1px;
`

const GifList = props => {
    return(
      <>
        {props.gifs.map(gif =>
            <StyledGif key={gif.id} src={gif.url} alt="" />
          )
        }
      </>
    )
}

export default GifList