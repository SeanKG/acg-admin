import React from 'react';
import logo from './logo.svg';
import Map from './map/Map';
import SideBar from './sidebar/Sidebar';
import './App.css';
import styled from 'styled-components';

import markers from './Markers';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;


function App() {
  return (
    <Wrapper>
      <SideBar markers={markers}></SideBar>
        <Map markers={markers}/>
    </Wrapper>
  );
}

export default App;
