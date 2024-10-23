import React from 'react'

export default function Bookmark({bookmark, }) {
    console.log(bookmark);
    const {title} = bookmark
    
  return (
    <div 
        className='bg-white my-2 p-4 rounded-md shadow-md capitalize'>
        {title} 
    </div>
  )
}
