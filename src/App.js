import React from 'react';
import Map from './map/Map';
import SideBar from './sidebar/Sidebar';
import './App.css';
import styled from 'styled-components';
import Header from './header/Header';
import { observer } from 'mobx-react';

import markers from './Markers';

const headerHeight = "50px";

const Wrapper = styled.div`
  display: flex;
  height: calc(100vh - ${headerHeight});
`;


class App extends Component() {

  render(){
    return (<>
      <Header height={headerHeight}></Header>
      <Wrapper>
        <SideBar markers={markers}></SideBar>
        <Map markers={markers}/>
      </Wrapper>
    </>);
  }
}

export default App;
