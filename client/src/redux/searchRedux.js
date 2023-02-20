import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },

  reducers: {
    querySearch: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { querySearch } = searchSlice.actions;
export default searchSlice.reducer;
