import React, { Component } from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
  box-sizing: border-box;
  -webkit-appearance: none;
  background: linear-gradient(to right, #F7EBEC, #7CE577);
  border: none;
  border-radius: 0;
  font-weight: 400;
  width: 100%;
  margin: 0;
  height: 52px;
  letter-spacing: 1px;
  font-size: 18px;
  padding: 10px 50px;
`

export default class GifSearch extends Component {
  render() {
    return (
      <div className="GifSearch">
        <form onSubmit={this.props.handleQuerySubmit}>
          <StyledInput 
            type="text" 
            value={this.props.query}
            onChange={this.props.handleQueryChange} 
            placeholder="Search for The Office GIFs!" />
        </form>
      </div>
    )
  }
}