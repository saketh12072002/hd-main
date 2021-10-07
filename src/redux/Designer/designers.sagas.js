import {takeLatest, put, all, call} from "redux-saga/effects"
// import { ProductsStart } from "./products.actions"

import designerTypes from './designers.types'
import {handleAddDesigner, handleFetchDesigners,handleDeleteDesigner, handleFetchDesigner} from './designers.helpers'
import {auth} from '../../firebase/utils'
import {setDesigners,fetchDesignersStart,setDesigner} from './designers.actions'


export function* addDesigner({ payload }) {
    try {
      const timestamp = new Date();
      yield handleAddDesigner({
        ...payload,
        createdDate: timestamp
      });
      yield put(
        fetchDesignersStart()
      );
  
  
    } catch (err) {
      // console.log(err);
    }
  
  }
  
  export function* onAddDesignerStart() {
    yield takeLatest(designerTypes.ADD_NEW_DESIGNER_START, addDesigner);
  }
  
  export function* fetchDesigners() {
    try {
      const designers = yield handleFetchDesigners();
      yield put(
        setDesigners(designers)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchDesignersStart() {
    yield takeLatest(designerTypes.FETCH_DESIGNERS_START, fetchDesigners);
  }


  export function* deleteDesigner({ payload }) {
    try {
      yield handleDeleteDesigner(payload);
      yield put (
        fetchDesignersStart()
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onDeleteDesignerStart() {
    yield takeLatest(designerTypes.DELETE_DESIGNER_START, deleteDesigner);
  }
  
  export function* fetchDesigner({ payload }) {
    try {
      console.log('payload')
      console.log(payload)
      const designer = yield handleFetchDesigner(payload);

      yield put(
        setDesigners(designer)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchDesignerStart() {
    yield takeLatest(designerTypes.FETCH_DESIGNER_START, fetchDesigner);
  }
  
  export default function* designersSagas() {
    yield all([
      call(onAddDesignerStart),
      call(onFetchDesignersStart),
      call(onDeleteDesignerStart),
      call(onFetchDesignerStart),
    ])
  }
  