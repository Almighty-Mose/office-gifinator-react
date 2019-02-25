import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=the office`

export default class GifListContainer extends Component {
  state = {
    gifs: []
  }
  
  componentDidMount() {
    console.log('GLC did mount')
    this.fetchGifs();
  }

  fetchGifs = (query = "") => {
    fetch(URL + " " + query)
      .then(resp => resp.json())
      .then(gifs => {
        this.setState({ gifs: gifs.data.map(gif => ({ url: gif.images.original.url })) });
      });
  }

  render() {
    return (
      <div className="GifListContainer">
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}