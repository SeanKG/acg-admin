import React, { Component } from 'react';
import styled from 'styled-components';
import {GiPoliceOfficerHead} from 'react-icons/gi';
import { observer, inject } from 'mobx-react';


const MarkerWrapper = styled(GiPoliceOfficerHead)`
    display: inline-block;
    size: 26;
    color: red;
    cursor: pointer;
`;

@inject('store') @observer
class Marker extends Component {

  onMouseEnter = () =>{
    const {store, id} = this.props;
    store.hover = id;
  }

  onMouseLeave = () =>{
    const {store} = this.props;
    store.hover = null;
  }

  onClick = () =>{
    const {store, id} = this.props;
    store.selected = id;
  }

  render() {
    const {marker, store} = this.props;

    const big = store.hover == marker.id || store.selected == marker.id;
    return (
      <MarkerWrapper size={big ? 60 : 10} color={marker.status} onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseLeave} onClick={this.onClick} />
    );
  }
}

export default Marker;
