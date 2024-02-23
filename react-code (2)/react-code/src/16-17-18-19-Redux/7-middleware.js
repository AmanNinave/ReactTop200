
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// store.js


// Configure the Redux store 
// with middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

