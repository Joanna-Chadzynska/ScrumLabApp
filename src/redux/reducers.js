import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { user } from "./user/reducers";

import { recipes } from "./recipes/reducers";

import { schedules } from "./schedules/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
};

const rootReducer = combineReducers({
  user,
  recipes,
  schedules
});

export default persistReducer(persistConfig, rootReducer);
