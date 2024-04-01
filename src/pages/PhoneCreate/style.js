import { styled } from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    .back {
        text-align: center;
        background: #fc8c8c;
        padding: 10px;
        border-radius: 12px;
        color: #fff;
        cursor: pointer;
    }
`
export const Input = styled.input`
    display: block;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 15px;

`
export const Button = styled.button`
    border: none;    
    padding: 10px;
    border-radius: 12px;
    background: #336EFD;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
`