import React, { Component } from 'react';
import styled from 'styled-components';
import {GiPoliceOfficerHead} from 'react-icons/gi';
import { observer, inject } from 'mobx-react';

const HeaderWrapper = styled.div`
    height: ${props => props.height};
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 10;
    border-bottom: 1px solid #eee;
`;

const Logo = styled.img`
    height: ${props => props.height};
    width: 150px;
`;

const Right = styled.div`
    display: flex;
`;

const Count = styled.div`
    padding: 10px;
    align-self: center;
    cursor: pointer;
`;

@inject('store') @observer
class Header extends Component {


    render(){
        const {height} = this.props;
        const { store, store: { red, orange, green } } = this.props;

        return (
            <HeaderWrapper height={height}>
                <Logo height={height} src={process.env.PUBLIC_URL + "osc-logo.png"}/>
                <Right>
                    <Count>Total: {green + red + orange}</Count>
                    <Count onClick={() => store.toggle("green")}><GiPoliceOfficerHead color="green" /> {green}</Count>
                    <Count onClick={() => store.toggle("orange")}><GiPoliceOfficerHead color="orange" /> {orange}</Count>
                    <Count onClick={() => store.toggle("red")}><GiPoliceOfficerHead color="red" /> {red}</Count>
                </Right>
            </HeaderWrapper>
      );
    }
}

export default Header;
