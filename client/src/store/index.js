import { configureStore } from '@reduxjs/toolkit'
import categorySlice from '../reducers/categorySlice';
import counterReducer from '../reducers/counterSlice'


const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categorySlice
  },
});

export default store;