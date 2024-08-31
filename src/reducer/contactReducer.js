import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const contactSlice = createSlice({
    name:'contact',
    initialState:initialState,
    reducers:{
        fetchContact:(state, action)=>{
            return action.payload;
        },
        addContact:(state,action)=>{
            return [...state, action.payload];
        },
        updateContact:(state,action)=>{
            const updateState = state.map((contact) => 
                contact.id === action.payload.id ? action.payload : contact
            );
            state = updateState;
            return state;
        },
        deleteContact:(state,action)=>{
            const filterContact = state.filter((contact)=>
                contact.id !== action.payload && contact
            );
            return filterContact;
        }
    }
});


export const contactReducer = contactSlice.reducer;
export const actions = contactSlice.actions;

export const contactSelector = (state) => state.contact || [];