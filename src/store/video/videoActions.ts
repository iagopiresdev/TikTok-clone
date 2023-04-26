import { PAUSE_VIDEO, PauseVideoAction } from "./videoTypes";

export function pauseVideo(): PauseVideoAction {
  return {
    type: PAUSE_VIDEO,
  };
}
