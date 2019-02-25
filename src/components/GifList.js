import React from 'react'

const GifList = props => {
    return(
      <div className="GifList">
          {props.gifs.map((gif, index) => <img key={index} src={gif.url} alt="" />)}
      </div>
    )
}

export default GifList