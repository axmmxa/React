const reducer = (state = 0, action) => {
    switch (action.type) {
        case "desposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state        
    }
}

export default reducer;
