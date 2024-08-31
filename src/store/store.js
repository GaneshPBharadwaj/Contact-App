import {configureStore} from '@reduxjs/toolkit';
import { contactReducer } from '../reducer/contactReducer';


export const store = configureStore({
    reducer: {
        contact: contactReducer
    }
})