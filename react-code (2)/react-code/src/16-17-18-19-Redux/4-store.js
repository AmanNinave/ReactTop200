
// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './5-reducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;



