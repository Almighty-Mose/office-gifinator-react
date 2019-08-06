import React, { Component } from 'react'
import styled from 'styled-components'

const StyledGif = styled.img`
  flex: 0 1 auto;
  height: 200px;
  padding: 0.5%;
`

const GifWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
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