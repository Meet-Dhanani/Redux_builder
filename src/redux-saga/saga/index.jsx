import { all } from "redux-saga/effects";
import { getProductSaga } from "./root/rootproductsaga";

export function* rootSaga() {
    yield all([getProductSaga()])
}