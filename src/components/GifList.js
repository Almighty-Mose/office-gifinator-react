import React, { Component } from 'react'
import styled from 'styled-components'

const StyledGif = styled.img`
  flex: 0 1 auto;
  margin: 5px;
  height: 200px;
  z-index: 0;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #011638;
  transform: scale(1);
  transition: transform 0.2s, z-index 0.2s;
  &:hover {
    transform: scale(1.25);
    z-index: 2;
  }
`

const GifWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

class GifList extends Component {

  findGif = e => {
    return this.props.gifs.find(gif => gif.id === e.currentTarget.id)
  }

  handleMouseEnter = event => {
    let fullGif = this.findGif(event)
    event.currentTarget.src = fullGif.url
    
  }

  handleMouseLeave = event => {
    let fullGif = this.findGif(event)
    event.currentTarget.src = fullGif.preview
    
  }

  render() {
    const { gifs } = this.props

    return(
      <GifWrapper>
        {gifs.map(gif =>
            <StyledGif 
              key={gif.id} 
              id={gif.id}
              src={gif.preview} 
              alt="" 
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
            />
          )
        }
      </GifWrapper>
    )
  }
}

export default GifList