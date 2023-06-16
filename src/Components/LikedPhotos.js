import React from 'react'
import Photo from './Photo'

function LikedPhotos({likes, handleDislikes}) {
  return (
    <div className='likes'>
        <h1>Likes</h1>
        <div className='like-container'>    
            {likes.map(like => {
                return <Photo src={like} handleDislikes={handleDislikes}/>
            })}
        </div>
    </div>
  )
}

export default LikedPhotos