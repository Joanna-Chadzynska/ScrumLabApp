import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

const middleware = [thunk, logger];

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
export default { store, persistor };
