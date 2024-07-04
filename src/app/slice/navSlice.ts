import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    action: '',
  },
  reducers: {
    setNavAction: (state, action) => {
      state.action = action.payload.action;
    },
  },
});

export const { setNavAction } = navSlice.actions;
export default navSlice.reducer;
