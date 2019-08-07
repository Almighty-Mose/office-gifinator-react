import React, { Component } from 'react'
import styled from 'styled-components'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

// should have an api key
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=the office`

const StyledGifContainer = styled.div`
  background-color: #7C898B;
  position: absolute;
  top: 70px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow-y: scroll;
`

export default class GifListContainer extends Component {
  constructor() {
    super()
    
    this.state = {
      gifs: [],
      limit: 25,
      query: ''
    }

    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleQuerySubmit = this.handleQuerySubmit.bind(this)
  }
  

  componentDidMount() {
    console.log('GLC did mount')
    this.fetchGifs(this.state.limit);
    this.refs.iScroll.addEventListener("scroll", () => {
      if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight) {
        this.loadMore()
      }
    })
  }

  handleQueryChange = (e) => {
    let input = e.target.value.replace('&', '')
    this.setState({
      query: input
    })
  }

  handleQuerySubmit = (e) => {
    e.preventDefault()
    this.fetchGifs(this.state.limit, this.state.query)
  }

  loadMore = () => {
    this.setState({limit: this.state.limit + 15})
    this.fetchGifs(this.state.limit, this.state.query)
  }

  fetchGifs = (limit, query = "") => {
    fetch(URL + " " + query + `&limit=${limit}`)
      .then(resp => resp.json())
      .then(gifs => {
        this.setState({ 
          gifs: gifs.data.map(gif => (
            { url: gif.images.original.url, id: gif.id,
              preview: gif.images.original_still.url
            }
          ))
        });
      });
  }

  render() {
    return (
      <StyledGifContainer ref="iScroll">
        <GifSearch 
          query={this.state.query}
          handleQueryChange={this.handleQueryChange}
          handleQuerySubmit={this.handleQuerySubmit} />
        <GifList gifs={this.state.gifs} />
      </StyledGifContainer>
    )
  }
}