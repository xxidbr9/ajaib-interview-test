import {
  all, debounce, put, select,
} from 'redux-saga/effects';
import { rdxUserSelector, rdxUserActions } from '.';

function* setSearchUserByKeyword(): Generator {
  const keyword = yield select(rdxUserSelector.getUserQueryKeywordFilter);
  yield put({ type: rdxUserActions.setSearchKeyword.type, payload: keyword });
}

function* searchQueryWatcher(): Generator {
  yield debounce(
    500,
    rdxUserActions.setSearchDebounce.type,
    setSearchUserByKeyword,
  );
}

export default function* rootUserSaga() {
  yield all([searchQueryWatcher()]);
}
