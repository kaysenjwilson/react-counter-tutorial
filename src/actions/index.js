export const increment = Number => {
    return{
        type: 'INCREMENT',
        payload: Number
    }
};
export const decrement = () => {
    return{
        type: 'DECREMENT'
    }
};