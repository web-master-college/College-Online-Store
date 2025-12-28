import { createSlice } from '@reduxjs/toolkit'
import reject from 'lodash/reject';

const initialState = {
  // categories: [],
  selectedCategories: new Set()
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    addCategory: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.categories.push(action.payload);
      state.selectedCategories.add(action.payload);
    },
    removeCategory: (state, action) => {
        // state.categories = reject(state.categories, c => c === action.payload);
        state.selectedCategories.delete(action.payload);
    },
    deleteCategories: (state) => {
      // state.categories.length = 0;
      state.selectedCategories.clear();
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCategory, removeCategory, deleteCategories } = categorySlice.actions

export default categorySlice.reducer;