import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import GifListContainer from './containers/GifListContainer'

import './App.css';

const StyledApp = styled.div`
  text-align: center;
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
