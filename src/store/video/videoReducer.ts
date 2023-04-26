import { PAUSE_VIDEO, VideoActionTypes } from "./videoTypes";

interface VideoState {
  isPlaying: boolean;
}

const initialState: VideoState = {
  isPlaying: true,
};

export function videoReducer(state = initialState, action: VideoActionTypes): VideoState {
  switch (action.type) {
    case PAUSE_VIDEO:
      return {
        ...state,
        isPlaying: false,
      };
    default:
      return state;
  }
}
