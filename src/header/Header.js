import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    height: ${props => props.height};
    width: 100%;
    background: #fff;
    display: flex;
    position: relative;
    z-index: 10;
    border-bottom: 1px solid #eee;
`;

const Logo = styled.h1`
    font-size: 26px;
    margin: 10px;
`;

class Header extends Component {

    render(){
        const {height} = this.props;
        return (
            <HeaderWrapper height={height}>
                <Logo>LOGO HERE</Logo>
            </HeaderWrapper>
      );
    }
}

export default Header;
