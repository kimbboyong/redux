import { styled } from 'styled-components';

export const ViewBox = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 10px;
    max-height: 1000px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 10px;
    }
`

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 20px;
    background: #fff;
    border-radius: 12px;
    padding: 10px;
    cursor: pointer;
`

export const Figure = styled.figure`
    max-width: 80px;
    img {
        max-width: 100%;
    }

`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    strong {
        font-size: 18px;
        color: #333;
    }

    p {
        font-size: 17px;
        color: #333;
    }
`

export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    
`
export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 12px;
    font-size: 18px;
    color: #333;
`