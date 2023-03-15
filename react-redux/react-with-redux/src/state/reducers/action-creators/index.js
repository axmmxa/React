export const depositMoney = () => {
    return (dispach) => {
        dispach({
            type: "deposit",
            payload: "amount"
        })
    }
}

export const withdrawMoney = (amount) => {
    return(dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
} 