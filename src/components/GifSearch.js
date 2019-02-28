import React, { Component } from 'react'

export default class GifSearch extends Component {
  state ={
    query: ''
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchGifs(0, this.state.query)
  }

  render() {
    return (
      <div className="GifSearch">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            value={this.state.query}
            onChange={this.handleChange} 
            placeholder="Search for The Office GIFs!" />
        </form>
      </div>
    )
  }
}