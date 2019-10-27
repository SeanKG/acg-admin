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

const Logo = styled.h1`
    font-size: 26px;
    margin: 10px;
`;

const Right = styled.div`
    display: flex;
`;

const Count = styled.div`
    padding: 10px;
    align-self: center;
`;

@inject('store') @observer
class Header extends Component {

    render(){
        const {height} = this.props;
        const { store: { red, orange, green } } = this.props;

        return (
            <HeaderWrapper height={height}>
                <Logo>LOGO HERE</Logo>
                <Right>
                    <Count>Total: 100</Count>
                    <Count><GiPoliceOfficerHead color="green" /> {green}</Count>
                    <Count><GiPoliceOfficerHead color="orange" /> {orange}</Count>
                    <Count><GiPoliceOfficerHead color="red" /> {red}</Count>
                </Right>
            </HeaderWrapper>
      );
    }
}

export default Header;
