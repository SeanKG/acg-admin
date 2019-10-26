import React, { Component } from 'react';
import styled from 'styled-components';

const Side = styled.div`
  flex: 0 0 300px;
`;

class Sidebar extends Component {

    render(){
        const {markers} = this.props;
        
        return (
          <Side>
    
          </Side>
      );
    }
}

export default Sidebar;
