import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=the office`

export default class GifListContainer extends Component {
  state = {
    gifs: [],
    limit: 25,
    query: ''
  }

  componentDidMount() {
    console.log('GLC did mount')
    this.fetchGifs(this.state.limit);
    this.refs.iScroll.addEventListener("scroll", () => {
      if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight) {
        console.log("ScrollTop:", this.refs.iScroll.scrollTop)
        console.log("ClientHeight:", this.refs.iScroll.clientHeight)
        this.loadMore()
      }
    })
  }

  handleQueryChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleQuerySubmit = (e) => {
    e.preventDefault()
    this.fetchGifs(this.state.limit, this.state.query)
  }

  loadMore = () => {
    this.setState({limit: this.state.limit + 5})
    this.fetchGifs(this.state.limit)
  }

  fetchGifs = (limit, query = "") => {
    fetch(URL + " " + query + `&limit=${limit}`)
      .then(resp => resp.json())
      .then(gifs => {
        this.setState({ 
          gifs: gifs.data.map(gif => ({ url: gif.images.original.url })),
          offset: gifs.data.length
        });
      });
  }

  render() {
    return (
      <div className="GifListContainer" ref="iScroll">
        <GifSearch 
          query={this.state.query}
          handleQueryChange={this.handleQueryChange.bind(this)}
          handleQuerySubmit={this.handleQuerySubmit.bind(this)} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}