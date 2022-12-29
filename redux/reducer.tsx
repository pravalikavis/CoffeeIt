import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        coffeeMachine: '',
        style: '',
        size: '',
        extra: undefined
    },
    reducers: {
        setCoffeeMachine: (state, action) => {
            return {
                ...state,
                coffeeMachine: action.payload
            }
        },
        setStyle: (state, action) => {
            return {
                ...state,
                style: action.payload
            }
        },
        setSize: (state, action) => {
            return {
                ...state,
                style: action.payload
            }
        },
        setExtra: (state, action) => {
            return {
                ...state,
                extra: action.payload
            }
        }
    }
})




export default counterSlice