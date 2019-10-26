import React from 'react';
import logo from './logo.svg';
import Map from './map/Map';
import './App.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Side = styled.div`
  flex: 0 0 300px;
`;


function App() {
  return (
    <Wrapper>
      <Side></Side>
        <Map />
    </Wrapper>
  );
}

export default App;
