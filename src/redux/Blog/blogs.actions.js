import blogsTypes from './blogs.types';

export const addBlogsStart = blogsData => ({
    type:blogsTypes.ADD_NEW_BLOG_START,
    payload:blogsData
});


export const fetchBlogsStart = () => ({
    type:blogsTypes.FETCH_BLOGS_START
    
})

export const setBlogs = blogs => ({
    type:blogsTypes.SET_BLOGS,
    payload: blogs
})

export const deleteBlogStart = blogID => ({
    type:blogsTypes.DELETE_BLOG_START,
    payload:blogID
})

export const fetchBlogStart = blogID => ({
    type:blogsTypes.FETCH_BLOG_START,
    payload:blogID
})

export const setBlog = blog => ({
    type:blogsTypes.SET_BLOG,
    payload:blog
})
