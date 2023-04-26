import { createStore, combineReducers } from "redux";
import { videoReducer } from "./video/videoReducer";

const rootReducer = combineReducers({
  video: videoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
