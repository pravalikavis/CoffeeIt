import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        coffeeMachine: ''
    },
    reducers: {
        setCoffeeMachine: (state, action) => {
            return {
                ...state,
                coffeeMachine: action.payload
            }
        }
    }
})




export default counterSlice