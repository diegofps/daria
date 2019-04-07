const initialState = [
    {
        name: "Diego",
        manufacturer: "Elenice",
        year: 1989,
        origin: "Brazil"
    }
]

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}

export default reducer