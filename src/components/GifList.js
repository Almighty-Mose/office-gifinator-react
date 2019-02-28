import React from 'react'

const GifList = props => {
    return(
      <>
          {props.gifs.map((gif, index) => <img key={index} src={gif.url} alt="" />)}
      </>
    )
}

export default GifList