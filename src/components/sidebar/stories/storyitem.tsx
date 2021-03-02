import React from "react";
import {StoryI, Story} from '../../../types/types'

const StoryItem = (prop: Story) => {

  const {story} = prop

  return (
    <>
      { 
        story.map((item: StoryI) => (
          <div className="storie" key={item.id}>
            <div className="storie-image">
              <img src={item.userPicture} alt={item.user} />
            </div>
            <div className="storie-user">
              <strong>{item.user}</strong>
              <span>{item.time}</span>
            </div>
          </div>
        ))  
      }
    </>
  )
}

export default StoryItem