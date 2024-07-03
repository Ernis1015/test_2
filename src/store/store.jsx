import { configureStore, createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    registerUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { registerUser } = usersSlice.actions;

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export default store;
