import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Create from '../../components/Create';
import { useSelector } from 'react-redux';
import Search from './Search';
import { Figure, Item, Text, ViewBox } from './style';

const PhoneView = () => {

    const contactList = useSelector(state => state.contactList);
    const search = useSelector(state => state.search);
    const [seachFilter, setSearchFilter] = useState([]);

    useEffect(() => {
        if (search !== '') {
            const list = contactList.filter((item) => item.name.includes(search));
            setSearchFilter(list);
        } else if (search === '') {
            setSearchFilter(contactList);
        }
    }, [search, contactList]);


    return (
        <>
            <Header title={'연락처'} />
            <Search />
            <ViewBox>
                {seachFilter.map((item, idx) => (
                    <Item key={idx}>
                        <Figure>
                            <img src="/images/user.png" alt="" />
                        </Figure>

                        <Text>
                            <strong>{item.name}</strong>
                            <p>{item.phoneNum}</p>
                        </Text>
                    </Item>
                ))}
            </ViewBox>
            <Create />
        </>
    )
}

export default PhoneView