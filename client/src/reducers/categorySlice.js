import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash';


const initialState = {
  selectedCategories: []
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) =>{
      console.log('action.payload',  action.payload);
        const newCategories = _.map(_.split(action.payload, ','), c => parseInt(_.trim(c)));
        
        state.selectedCategories = _.uniq(newCategories);
    },
    addCategory: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.categories.push(action.payload);
      state.selectedCategories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.selectedCategories = _.reject(state.selectedCategories, c => c === action.payload);
    },
    deleteCategories: (state) => {
      state.selectedCategories.length = 0;
      // state.selectedCategories.clear();
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCategory, removeCategory, deleteCategories, setCategories } = categorySlice.actions

export default categorySlice.reducer;