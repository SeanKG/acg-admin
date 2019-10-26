import React, { Component } from 'react';
import styled from 'styled-components';
import {GiPoliceOfficerHead} from 'react-icons/gi';

const MarkerWrapper = styled(GiPoliceOfficerHead)`
    display: inline-block;
    size: 26;
    color: red;
    cursor: pointer;
`;

class Marker extends Component {

  render() {
    const {marker} = this.props;
    return (
      <MarkerWrapper size={30} color={marker.status} />
    );
  }
}

export default Marker;

