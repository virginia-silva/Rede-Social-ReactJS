import axios from "axios";
import React, { useEffect, useState } from "react";
import StoryItem from "./storyitem";
import {StoryI, Story} from '../../../types/types'

const Stories = () => {

  const [storyItem, setStoryItem] = useState<StoryI[]>([])

  useEffect(() => {
    axios.get('http://localhost:4000/stories')
      .then(resposta => setStoryItem(resposta.data))
  }, [])

  return (
    <div className="stories">
      <h2>Stories</h2>
      <StoryItem story={storyItem}/>
    </div>
  )
}

export default Stories