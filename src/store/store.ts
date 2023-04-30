import { configureStore } from "@reduxjs/toolkit";
import  videoReducer  from "./video/videoReducer";

const store = configureStore({
  reducer: {
    video: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
