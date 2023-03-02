import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
// import popularMovies from "./reducer/popularMovies";
import saga from "./saga/popularMoviesSaga";
import popularMovies from "./reducer/popularMovies";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  popularMovies,
});

const store = configureStore({
  reducer,
  // middleware: () => [sagaMiddleware]}
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(saga);

export default store;
