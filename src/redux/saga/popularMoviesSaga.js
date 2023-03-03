import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* popularMovie() {
  let data = yield axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=1"
  );
//   console.log(data.data);
  yield put({
    type: "SAGA_POPULAR_MOVIE",
    payload: {
      data: data.data,
    },
  });
}
function* nowPlayingMovie() {
  let data = yield axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=1"
  );
//   console.log(data.data);
  yield put({
    type: "SAGA_NOW_PLAYING",
    payload: {
      data: data.data,
    },
  });
}
function* upComingMovie() {
  let data = yield axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=1"
  );
//   console.log(data.data);
  yield put({
    type: "SAGA_UP_COMING_MOVIE",
    payload: {
      data: data.data,
    },
  });
}
function* topRatedMovie() {
  let data = yield axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=1"
  );
//   console.log(data.data);
  yield put({
    type: "SAGA_TOP_RATED_MOVIE",
    payload: {
      data: data.data,
    },
  });
}

function* saga() {
  yield takeEvery("POPULAR_MOVIE", popularMovie);
  yield takeEvery("NOW_PLAYING", nowPlayingMovie);
  yield takeEvery("UP_COMING_MOVIE", upComingMovie);
  yield takeEvery("TOP_RATED_MOVIE", topRatedMovie);
}
export default saga;
