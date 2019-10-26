import React, { Component } from 'react';
import Map from './map/Map';
import SideBar from './sidebar/Sidebar';
import './App.css';
import styled from 'styled-components';
import Header from './header/Header';
import { observer, inject } from 'mobx-react';

const headerHeight = "50px";

const Wrapper = styled.div`
display: flex;
height: calc(100vh - ${headerHeight});
`;

@inject('store') @observer
class App extends Component {

  constructor(){
    super();
  }

  render(){
    const { store } = this.props;

    return (<>
      <Header height={headerHeight}></Header>
      <Wrapper>
        <SideBar markers={store.markers}></SideBar>
        <Map markers={store.markers}/>
      </Wrapper>
    </>);
  }
}

export default App;
