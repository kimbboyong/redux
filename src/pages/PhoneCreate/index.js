import React, { useState } from 'react'
import Header from '../../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Form, Button, Input } from './style'

const PhoneCreate = () => {
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_CONTACT", payload: { name, phoneNum } });
        navigate('/');
    }

    const valueNum = (e) => {
        const { value } = e.target;
        let formattedValue = value.replace(/[^0-9]/g, '')
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/, "$1-$2-$3")
            .replace(/(\-{1,2})$/, "");
        setPhoneNum(formattedValue);
    }

    return (
        <>
            <Header title={"등록"} />

            <Form onSubmit={onSubmit}>
                <Input
                    type="text"
                    placeholder='홍길동'
                    onChange={(e) => { setName(e.target.value) }}
                />
                <Input type="text" placeholder="'-' 을 제외한 번호를 입력해주세요" onChange={valueNum} maxLength="13" value={phoneNum} />
                <Button type="submit">등록</Button>
                <Link to="/" className='back'>돌아가기</Link>
            </Form>
        </>
    )
}

export default PhoneCreate