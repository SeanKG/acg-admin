import React, { Component } from 'react';
import styled from 'styled-components';

const MarkerWrapper = styled.div`
    display: inline-block;
    background: #fff;
    padding: 5px;
`;

class Marker extends Component {

  render() {
    const {marker} = this.props;
    return (
      <MarkerWrapper>
          {marker.id}
      </MarkerWrapper>
    );
  }
}

export default Marker;

