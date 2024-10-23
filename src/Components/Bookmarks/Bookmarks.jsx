import Bookmark from "../Bookmark/Bookmark";

export default function Bookmarks({bookmarks, markRead}) {
  // console.log(bookmarks);
  
  return (
    <div className="md:w-1/3 my-16 mx-5 px-3">
          <div>
              <h1 
               className="font-semibold text-xl py-3 rounded-md bg-slate-200 text-center">Reading time: : {markRead}
               </h1>
          </div>

        <h1 
          className="font-semibold text-xl py-3 my-3 rounded-md bg-slate-100 text-center">Bookmarked Blogs: {bookmarks.length}
        </h1>

        {
          bookmarks.map((bookmark, idx) => <Bookmark 
            key={idx}
            markRead = {markRead} 
            bookmark={bookmark}></Bookmark>)
        }

    </div>
  )
}
