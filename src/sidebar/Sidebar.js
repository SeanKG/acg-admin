import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item';

const Side = styled.div`
  flex: 0 0 300px;
  padding-top: 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  position: relative;
  z-index: 8;
`;

class Sidebar extends Component {

    render(){
        const {markers} = this.props;
        
        return (
            <Side>
                {markers.map(marker =>
                    <Item key={marker.id} {...marker} />
                )}
            </Side>
      );
    }
}

export default Sidebar;
