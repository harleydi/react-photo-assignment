import React from 'react'
import Photo from './Photo'

function DislikedPhotos({ disLikes, handleLikes }) {
  return (
    <div className='dislikes'>
        <h1>Dislikes</h1>
        <div className='dislike-container'>  
            {disLikes.map((like) => {
                return <Photo src={like} handleLikes={handleLikes} />
            })}
        </div>
    </div>
  )
}

export default DislikedPhotos