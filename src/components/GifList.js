import React, { Component } from 'react'
import styled from 'styled-components'

const StyledGif = styled.img`
  width: 23%;
  height: 23%;
  padding: 1%;
`
class GifList extends Component {

  findGif = e => {
    return this.props.gifs.find(gif => gif.id === e.currentTarget.id)
  }

  handleMouseEnter = (element) => {
    let fullGif = this.findGif(element)
    element.currentTarget.src = fullGif.url
    console.log(fullGif)
  }

  render() {
    return(
      <>
        {this.props.gifs.map(gif =>
            <StyledGif 
              key={gif.id} 
              id={gif.id}
              src={gif.preview} 
              alt="" 
              onMouseEnter={this.handleMouseEnter} 
            />
          )
        }
      </>
    )
  }
}

export default GifList