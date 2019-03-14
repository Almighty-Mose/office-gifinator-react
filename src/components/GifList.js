import React from 'react'
import styled from 'styled-components'

const StyledGif = styled.img`
  width: 23%;
  height: 23%;
  padding: 1%;
`

const GifList = props => {
    return(
      <>
        {props.gifs.map(gif =>
            <StyledGif key={gif.id} src={gif.preview} alt="" onHover={props.handleHover} />
          )
        }
      </>
    )
}

export default GifList