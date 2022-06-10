import { createSlice } from "@reduxjs/toolkit";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {gallery:[], isLoading:true},
  reducers: {
    loadingStart(store) {
      store.isLoading = true;
    },
    loadingComplete(store) {
      store.isLoading = false;
    },
    addAlbums(store, action) {
      store.gallery = [...action.payload];
      console.log(store);
    },
  },
});

export const galleryActions = gallerySlice.actions;
export default gallerySlice;
