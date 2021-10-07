import { all, call } from 'redux-saga/effects';
import userSagas from './User/user.sagas'
import productSagas from "./Products/products.sagas"
import blogsSagas from './Blog/blogs.sagas'
import ordersSagas from './Orders/orders.sagas';
import designersSagas from './Designer/designers.sagas'


export default function* rootSaga() {
    yield all([call(userSagas),call(productSagas),call(blogsSagas),call(ordersSagas),call(designersSagas)])
}