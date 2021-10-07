import {takeLatest, put, all, call} from "redux-saga/effects"
// import { ProductsStart } from "./products.actions"

import blogTypes from './blogs.types'
import {handleAddBlog, handleFetchBlogs,handleDeleteBlog, handleFetchBlog} from './blogs.helpers'
import {auth} from './../../firebase/utils'
import {setBlogs,fetchBlogsStart,setBlog} from './blogs.actions'


export function* addBlog({ payload }) {
    try {
      const timestamp = new Date();
      yield handleAddBlog({
        ...payload,
        createdDate: timestamp
      });
      yield put(
        fetchBlogsStart()
      );
  
  
    } catch (err) {
      // console.log(err);
    }
  
  }
  
  export function* onAddBlogStart() {
    yield takeLatest(blogTypes.ADD_NEW_BLOG_START, addBlog);
  }
  
  export function* fetchBlogs() {
    try {
      const blogs = yield handleFetchBlogs();
      yield put(
        setBlogs(blogs)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchBlogsStart() {
    yield takeLatest(blogTypes.FETCH_BLOGS_START, fetchBlogs);
  }


  export function* deleteBlog({ payload }) {
    try {
      yield handleDeleteBlog(payload);
      yield put (
        fetchBlogsStart()
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onDeleteBlogStart() {
    yield takeLatest(blogTypes.DELETE_BLOG_START, deleteBlog);
  }
  
  export function* fetchBlog({ payload }) {
    try {
      const blog = yield handleFetchBlog(payload);
      yield put(
        setBlog(blog)
      );
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onFetchBlogStart() {
    yield takeLatest(blogTypes.FETCH_BLOG_START, fetchBlog);
  }
  
  export default function* blogsSagas() {
    yield all([
      call(onAddBlogStart),
      call(onFetchBlogsStart),
      call(onDeleteBlogStart),
      call(onFetchBlogStart),
    ])
  }
  