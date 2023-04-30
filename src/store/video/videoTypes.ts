export const PLAY_VIDEO = "PLAY_VIDEO";
export const PAUSE_VIDEO = "PAUSE_VIDEO";

export interface PlayVideoAction {
  type: typeof PLAY_VIDEO;
}

export interface PauseVideoAction {
  type: typeof PAUSE_VIDEO;
}

export type VideoActionTypes = PlayVideoAction | PauseVideoAction;
