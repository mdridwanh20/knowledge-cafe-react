
import { useState } from 'react'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  
  // bookmarks work here:
  const [bookmarks, setBookmarks ] = useState([])
  const bookmarksHandlerIcon = (blog) => {
      const newBookMarks = [...bookmarks, blog]
      setBookmarks(newBookMarks)
  }


  // marks as read;
  const [markRead, setMarkRead] = useState(0)

  const handlerMarkRead = (id ,time) =>{
    const newReadingTime = markRead + time;
    setMarkRead(newReadingTime)
    // remove blog from bookmark;
    // console.log('remove', id);
    const remainingBookmarks = bookmarks.filter(bookmarks => bookmarks.id !== id);
    setBookmarks(remainingBookmarks)
  }
  
  return (
    <>
      <Header></Header>

      <div className='container m-auto md:flex px-2'>

      <Blogs 
            handlerMarkRead = {handlerMarkRead}
            bookmarksHandlerIcon = {bookmarksHandlerIcon}>
      </Blogs>

      <Bookmarks 
            markRead = {markRead}
            bookmarks = {bookmarks}>
      </Bookmarks>

      </div>

    </>
  )
}

export default App
