import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* getData() {
  let data = yield axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=1"
  );
//   console.log(data.data);
  yield put({
    type: "Api_data",
    payload: {
      data: data.data,
    },
  });
}

function* saga() {
  yield takeEvery("SHOW_LIST", getData);
}
export default saga;
