import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga/popularMoviesSaga";
import Movies from "./Movies";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  Movies,
});

const store = configureStore({
  reducer,
  // middleware: () => [sagaMiddleware]}
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(saga);

export default store;
