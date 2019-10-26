import React, { Component } from 'react';
import styled from 'styled-components';
import {GiPoliceOfficerHead} from 'react-icons/gi';
import { observer, inject } from 'mobx-react';

const ItemWrapper = styled.div`
    padding: 5px;
    display: flex;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    background: ${props => props.selected ? "#eee" : "#fff"}
`;

const Icon = styled(GiPoliceOfficerHead)`
`;

const Content = styled.div`
    padding-left: 10px;
`;

@inject('store') @observer
class Item extends Component {

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
        const {id, status, user, store } = this.props;
        const selected = store.hover == id || store.selected == id;

        return (
            <ItemWrapper
                selected={selected}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                onClick={this.onClick}>
                <Icon size={30} color={status} />
                <Content>
                    <div>User ID: {user.id}</div>
                    <div>Phone Number: {user.phone}</div>
                </Content>
            </ItemWrapper>
        );
    }
}

export default Item;
