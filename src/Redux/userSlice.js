import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: 'kha',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state) {
      return { ...state };
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
