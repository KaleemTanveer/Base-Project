import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
function* popularTvShow(props) {
    let data = yield axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=fd51a367f88926fa40d83760311ca74a&language=en-US&page=${props.page}`
    );
  
    console.log(data);
    yield put({
      type: "SAGA_POPULAR_TV_SHOW",
      payload: {
        data: data.data,
        page: props.page,
      },
    });
  }
function* tvShow() {
    yield takeEvery("POPULAR_TV_SHOW", popularTvShow);
  }
  export default tvShow;