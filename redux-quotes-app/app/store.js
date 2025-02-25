
import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './reducers/quotereducer';

const store = configureStore({
    reducer: {
        quotes: quoteReducer,
    },
});

export default store;