import React, { Component } from 'react'
import styled from 'styled-components'

const StyledGif = styled.img`
  width: 23%;
  height: 200px;
  padding: 0.5%;
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
      <>
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
      </>
    )
  }
}

export default GifList