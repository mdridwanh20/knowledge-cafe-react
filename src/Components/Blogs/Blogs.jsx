import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";

export default function Blogs({bookmarksHandlerIcon, handlerMarkRead}) {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
  }, [])

  // console.log(blogs);
  

  return (
    <div className=" md:w-2/3 ">
          {/* <h1>Blog : {blogs.length} </h1> */}

          {
            blogs.map(blog => <Blog 
              key={blog.id} 
              bookmarksHandlerIcon = {bookmarksHandlerIcon}
              handlerMarkRead = {handlerMarkRead}
              blog={blog} ></Blog>)
          }

    </div>
  )
}
