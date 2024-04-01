const initialstate = {
    contactList: [],
    search: '',
}

function reducer(state = initialstate, action) {
    const { type, payload } = action;

    switch (type) {
        case "ADD_CONTACT":
            return { ...state, contactList: [...state.contactList, { name: payload.name, phoneNum: payload.phoneNum }] };
        case "USER_SEARCH":
            return { ...state, search: payload.search };
        default:
            return { ...state };
    };
};

export default reducer;