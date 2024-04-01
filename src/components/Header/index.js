import React from 'react'
import { styled } from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

`

const Header = ({ title }) => {
    return (
        <Wrapper>
            <h2>{title}</h2>
        </Wrapper>
    )
}

export default Header