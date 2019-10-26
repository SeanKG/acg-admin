import React, { Component } from 'react';
import styled from 'styled-components';
import {GiPoliceOfficerHead} from 'react-icons/gi';

const ItemWrapper = styled.div`
    padding: 5px;
    display: flex;
    border-bottom: 1px solid #eee;
    cursor: pointer;
`;

const Icon = styled(GiPoliceOfficerHead)`
`;

const Content = styled.div`
    padding-left: 10px;
`;

class Item extends Component {

  render() {
    const {id, status, user} = this.props;
    return (
        <ItemWrapper>
            <Icon size="30" color={status} />
            <Content>
                <div>User ID: {user.id}</div>
                <div>Phone Number: {user.phone}</div>
            </Content>
        </ItemWrapper>
    );
  }
}

export default Item;

