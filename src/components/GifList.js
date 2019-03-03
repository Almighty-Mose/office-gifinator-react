import React from 'react'

const GifList = props => {
    return(
      <>
        {props.gifs.map(gif =>
          <img key={gif.id} src={gif.url} alt="" />)
        }
      </>
    )
}

export default GifList