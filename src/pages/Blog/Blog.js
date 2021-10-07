import React,{useEffect,useState} from 'react'
import './styles.scss'
import Oneblog from './Oneblog/Oneblog'
import {useDispatch, useSelector} from "react-redux"
import {useHistory,useParams} from 'react-router-dom'
import { addBlogsStart,  fetchBlogsStart, deleteBlogStart, fetchBlogStart } from '../../redux/Blog/blogs.actions'

const mapState = ({blogsData}) => ({
    blogs:blogsData.blogs
  })
  

function Blog() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {blogs} = useSelector(mapState);


    useEffect(()=>{
        dispatch(fetchBlogsStart());
      },[]);

    return (
        <div className="blogs">
            <div className="blogheader"></div>
            <div className="bloggrid">
                {blogs.map((blog,pos)=>{
                    return (
                        <Oneblog key={pos} {...blog}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Blog
