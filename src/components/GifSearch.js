import React, { Component } from 'react'

export default class GifSearch extends Component {
  render() {
    return (
      <div className="GifSearch">
        <form onSubmit={this.props.handleQuerySubmit}>
          <input 
            type="text" 
            value={this.props.query}
            onChange={this.props.handleQueryChange} 
            placeholder="Search for The Office GIFs!" />
        </form>
      </div>
    )
  }
}