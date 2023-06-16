import React from 'react'
import Photo from './Photo'

function PhotoSec({ photos, handleLikes, handleDislikes }) {
    console.log(photos)
  return (
    <div className='photo-container'>
        {photos.map((pic) => {
            return <Photo 
                src={pic}
                handleLikes={handleLikes}
                handleDislikes={handleDislikes}
            />
        })}
    </div>
  )
}

export default PhotoSec