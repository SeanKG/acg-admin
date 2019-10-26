import React, { Component } from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    padding: 5px;
`;

class Item extends Component {

  render() {
    const {id} = this.props;
    return (
        <ItemWrapper>{id}</ItemWrapper>
    );
  }
}

export default Item;

