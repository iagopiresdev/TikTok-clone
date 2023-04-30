import { PAUSE_VIDEO, PauseVideoAction, PLAY_VIDEO, PlayVideoAction } from "./videoTypes";

export function pauseVideo(): PauseVideoAction {
  return {
    type: PAUSE_VIDEO,
  };
}

export function playVideo(): PlayVideoAction{
  return {
    type: PLAY_VIDEO,
  };
};
