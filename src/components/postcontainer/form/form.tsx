import axios from 'axios';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPost } from '../../../store/ducks/post/actions';

const Form  = () => {

  const dispatch = useDispatch()

  const inputUrl = useRef<HTMLInputElement>(null)
  const inputDescription = useRef<HTMLInputElement>(null)

  const { username, userPicture } = useSelector((state: any) => state.user)

  const toPost = () => {

    const novoPost = {
      user: username,
      userPicture: userPicture,
      postPicture: inputUrl.current?.value,
      description: inputDescription.current?.value,
      likes: 0
    }

    axios.post('http://localhost:4000/posts', novoPost)
      .then(resposta => dispatch(postPost(resposta.data)))
  }

  return (
      <div className="form">
        <p>Faça uma postagem aqui</p>
        <input type="text" placeholder="Cole a url da imagem" ref={inputUrl} />
        <input type="text" placeholder="Digite uma descrição" ref={inputDescription} />
        <button onClick={toPost}>Postar!</button>
      </div>
  );
}

export default Form;