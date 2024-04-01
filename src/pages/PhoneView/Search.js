import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Input, SearchBox } from './style';

const Search = () => {
    const [search, setSearch] = useState('');

    const dispath = useDispatch();

    const onChange = (e) => {
        const { value } = e.target;
        setSearch(value);
        if (e.key === 'Enter') {
            console.log('asd');
            dispath({ type: "USER_SEARCH", payload: { search } });
        }

    }
    return (
        <SearchBox>
            <Input type="text" onKeyUp={onChange} placeholder="입력 후 엔터를 눌러주세요." />
        </SearchBox>
    )
}

export default Search