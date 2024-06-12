import { IHomePageState } from '@/store/slices/types/homePageReducer';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IHomePageState = {
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'homePageReducer',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setLoaded(state) {
      state.loading = false;
      state.error = null;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearState: () => initialState,
  },
});

// Reducer
export default slice.reducer;
// Actions
export const { clearState } = slice.actions;

// TODO: add call api for image
