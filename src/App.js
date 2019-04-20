import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import GifListContainer from './containers/GifListContainer'

import './App.css';

const StyledApp = styled.div`
  text-align: center;
  /* scrollbar - NOT SUPPORTED IN IE/EDGE OR FIREFOX */

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #1b1b1b; 
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray; 
}
`

const App = () => {
  return (
    <StyledApp>
      <Header />
      <GifListContainer />
    </StyledApp>
  );
}

export default App;
