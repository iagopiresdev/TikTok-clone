import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VideoState {
  playing: boolean;
}

const initialState: VideoState = {
  playing: false,
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setPlaying: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload;
    },
  },
});

export const { setPlaying } = videoSlice.actions;
export default videoSlice.reducer;
