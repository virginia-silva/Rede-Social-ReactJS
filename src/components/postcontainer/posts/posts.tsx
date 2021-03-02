import axios from "axios";
import React, { useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getPost, patchPost } from "../../../store/ducks/post/actions";
import { Post } from "../../../store/ducks/post/types";

const Posts = () => {

  const dispatch = useDispatch()

  const {arrayPosts} = useSelector((state: any) => state.post)

  useEffect(() => {
    axios.get('http://localhost:4000/posts')
      .then(resposta => dispatch(getPost(resposta.data)))
  }, [])

  const like = (post: Post) => {

    const numberOfLikes = {
      likes: post.likes + 1
    }

    axios.patch(`http://localhost:4000/posts/${post.id}`, numberOfLikes)
      .then(resposta => dispatch(patchPost(resposta.data)))
  }

  return (
    <>
      {
        arrayPosts.map((item: Post) => (
          <div className="post" key={item.id}>
          <header>
            <img src={item.userPicture} alt={item.user} />
            <div className="post-user">
              <strong>{item.user}</strong>
              <span>{item?.location}</span>
            </div>
          </header>
          <div className="post-image">
            <img src={item.postPicture} alt="post" />
          </div>
          <div className="post-likes">
            <FiHeart onClick={() => like(item)}/>
            {item.likes}
          </div>
          <p>{item.description}</p>
        </div>
        ))
      }
    </>
  )
}

export default Posts