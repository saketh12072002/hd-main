import React from 'react'
import './styles.scss'
import {Link, useHistory} from "react-router-dom"

function Oneblog(blog) {
    
    const {documentID,blogPicture,blogDate,blogTitle} = blog

    return (
        <div className="oneblog">
            <Link to={`/blogs/${documentID}`}>
            <div className="blogpicture">
                <img src={blogPicture} />
                <div className="backoverlay">
                <div className="overlay">
                    view story
                </div>
                </div>
               </div>
            </Link>
            <Link to={`/blogs/${documentID}`}>
               <div className="blogdate">
                  {blogDate}
                </div>
                <div className="blogtitle">
                    {blogTitle}
                </div>
                </Link>
        </div>
    )
}

export default Oneblog
