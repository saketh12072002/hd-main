import {takeLatest, put, all, call} from "redux-saga/effects"
// import { ProductsStart } from "./products.actions"

import productsTypes from './products.types'
import {handleAddProduct, handleFetchProducts, handleFetchProductsSize,handleDeleteProduct, handleFetchProduct, handleFetchProductsBrand,handleFetchProductsDresstype} from './products.helpers'
import {auth} from './../../firebase/utils'
import {setProducts,fetchProductsStart,setProduct} from './products.actions'


export function* addProduct({ payload }) {

    try {
      const timestamp = new Date();
      yield handleAddProduct({
        ...payload,
        productAdminUserUID: auth.currentUser.uid,
        createdDate: timestamp
      });
      yield put(
        fetchProductsStart()
      );
  
  
    } catch (err) {
      // console.log(err);
    }
  
  }
  
  export function* onAddProductStart() {
    yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
  }
  
  export function* fetchProducts({ payload }) {
    try {

      const products = yield handleFetchProducts(payload);
      yield put(
        setProducts(products)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchProductsStart() {
    yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
  }


  export function* fetchProductsSize({ payload }) {
    try {
      const products = yield handleFetchProductsSize(payload);
      yield put(
        setProducts(products)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchProductsStartSize() {
    yield takeLatest(productsTypes.FETCH_PRODUCTS_START_SIZE, fetchProductsSize);
  }


  export function* fetchProductsDresstype({ payload }) {
    try {
      const products = yield handleFetchProductsDresstype(payload);
      yield put(
        setProducts(products)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchProductsStartDresstype() {
    yield takeLatest(productsTypes.FETCH_PRODUCTS_START_DRESSTYPE, fetchProductsDresstype);
  }


  export function* fetchProductsBrand({ payload }) {
    try {

     
      const products = yield handleFetchProductsBrand(payload);
      yield put(
        setProducts(products)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchProductsStartBrand() {
    yield takeLatest(productsTypes.FETCH_PRODUCTS_START_BRAND, fetchProductsBrand);
  }
  
  export function* deleteProduct({ payload }) {
    try {
      yield handleDeleteProduct(payload);
      yield put (
        fetchProductsStart()
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onDeleteProductStart() {
    yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
  }
  
  export function* fetchProduct({ payload }) {
    try {
      const product = yield handleFetchProduct(payload);
      yield put(
        setProduct(product)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchProductStart() {
    yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct);
  }
  
  export default function* productsSagas() {
    yield all([
      call(onAddProductStart),
      call(onFetchProductsStart),
      call(onFetchProductsStartSize),
      call(onFetchProductsStartDresstype),
      call(onFetchProductsStartBrand),
      call(onDeleteProductStart),
      call(onFetchProductStart),
    ])
  }
  