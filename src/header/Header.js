import React, { Component } from 'react';
import styled from 'styled-components';
import {GiPoliceOfficerHead} from 'react-icons/gi';

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
`;

class Header extends Component {

    render(){
        const {height} = this.props;
        return (
            <HeaderWrapper height={height}>
                <Logo height={height} src={process.env.PUBLIC_URL + "osc-logo.png"}/>
                <Right>
                    <Count>Total: 100</Count>
                    <Count><GiPoliceOfficerHead color="green" /> 50</Count>
                    <Count><GiPoliceOfficerHead color="orange" /> 25</Count>
                    <Count><GiPoliceOfficerHead color="red" /> 25</Count>
                </Right>
            </HeaderWrapper>
      );
    }
}

export default Header;
