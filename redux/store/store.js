import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/counterSlice";
import calculateSlice from "../slice/calculateSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//     // 여기에 다른 리듀서 추가 가능
//   },
// });

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  counter: counterSlice,
  calculate: calculateSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
