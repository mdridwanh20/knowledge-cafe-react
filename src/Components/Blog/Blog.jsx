import { FiBookmark } from "react-icons/fi";

export default function Blog({blog, bookmarksHandlerIcon, handlerMarkRead}) {
  const {id, cover, title, author, author_img, posted_date, reading_time, hashtags} = blog
    
  return (
    <div className="border my-16 p-5">
          <img className="w-full rounded-md" 
          src={cover} alt="" />
           
        <div className="my-5">
            <div className="flex items-center justify-between">
                  <div className="flex items-center">
                        <img className="w-12 me-4" src={author_img} alt={`cover picture of the title ${title} `} />

                        <div>
                          <p className="text-2xl font-semibold"> {author} </p>
                          <p className="text-base text-gray-700"> {posted_date}</p>
                        </div>
                  </div>

{/* click bookmark icon */}
                  <div className="flex items-center space-x-2 ">
                        <p> {reading_time} min read </p>

                        <button
                          onClick={ () => bookmarksHandlerIcon(blog)}
                          >
                          <FiBookmark></FiBookmark>
                        </button>
                  </div>

              </div>

              <h1 className="text-4xl my-4 capitalize font-semibold"> {title} </h1>

              <p> 
                  {
                    hashtags.map((hash, index) => 
                    <span key={index}> 
                    <a href="">{hash} </a> </span>)
                  }  
              </p>

              <button 
              onClick={() => handlerMarkRead(id, reading_time)}
              className="text-blue-500 my-1"> 
              <u>Mark as Read</u> </button>

        </div>

    </div>
  )
}
