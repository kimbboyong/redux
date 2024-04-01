import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #336EFD;
    border-radius: 50%;
    color: #fff;
    figure {
        height: 100%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        max-width: 100%;
    }
    
`

const Create = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/create');
    }

    return (
        <Wrapper>
            <figure onClick={onClick}>
                <img src="/images/plus.png" alt="" />
            </figure>
        </Wrapper>
    )
}

export default Create