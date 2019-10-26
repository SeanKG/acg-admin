import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item';

const Side = styled.div`
  flex: 0 0 300px;
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
