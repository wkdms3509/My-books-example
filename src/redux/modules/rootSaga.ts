import { all } from 'redux-saga/effects';
import { authSaga } from './auth';

// const rootSaga = () => {
//     yield all([authSaga()]);
// }

export default function* rootSaga() {
    yield all([authSaga()]);
}