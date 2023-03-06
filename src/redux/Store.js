import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import movie from "./saga/popularMoviesSaga";
import Movies from "./reducer/Movies";
import People from "./reducer/People";
import people from "./saga/PopularPeopleSaga";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  Movies,
  People,
});

const store = configureStore({
  reducer,
  // middleware: () => [sagaMiddleware]}
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(movie);
sagaMiddleware.run(people);

export default store;
