import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import BookRead from './BookRead'

const BookForm = (props) => {
  const [ title, setTitle ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ status, setStatus ] = useState('')
  const [ rating, setRating ] = useState(1)
  const [ conclusion, setConclusion ] = useState(new Date())

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value)
  }

  const handleStatusChange = (event) => {
    setStatus(Number(event.target.value))
  }

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value))
  }

  const dateFormat = (unDate = new Date) => {
    return [unDate.getFullYear(), unDate.getMonth()+1, unDate.getDate() ]
      .map(n => n < 10 ? `0${n}` : `${n}`).join('-');
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //API VAI AQUI
    const Obj = {
      titulo: title,
      autor: author,
      adicionado: dateFormat(),
      status: status
    }
    if ( status === 2 ) {
      Obj.nota = rating
      Obj.concluido = dateFormat(conclusion)
    }
    console.log(Obj)
    axios.post('http://127.0.0.1:8000/api/booktrackerapi/', Obj)
		.then(response => {
			console.log(response.data)
      props.setFresh(false);
		})
    .catch(error => {
      console.log(error)
    })
  }
  
  return (
    <Wrapper>
      <Form>
        <span>Título do Livro</span>
        <input type='text' value={title} onChange={handleTitleChange} required />
        <span>Nome do Autor</span>
        <input type='text' value={author} onChange={handleAuthorChange} required />
        <span>Status</span>
        <select value={status} onChange={handleStatusChange} required>
          <option value=' ' disabled selected>Escolha o Status</option>
          <option value='0'> Quero Ler </option>
          <option value='1'> Lendo </option>
          <option value='2'> Lido </option>
        </select>
        { 
        status === 2 
        ?
          <BookRead 
            rating={rating} 
            conclusion={conclusion} 
            setRating={handleRatingChange} 
            setConclusion={setConclusion} 
          /> 
        : 
          '' 
        }
        <button onClick={handleSubmit} type="submit">Enviar</button>
      </Form>
    </Wrapper>
  );
}
 
export default BookForm;

const Wrapper = styled.div`
  display: flex;
  margin: 1rem;
`

const Form = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > span {

  }

  > input {
    height: 20px;
    border-radius: 5px;
    width: 250px;
    margin-bottom: 0.5rem;
  }

  > select {
    height: 25px;
    border-radius: 5px;
    width: 250px;
    margin-bottom: 0.5rem;
  }

  > button {
    margin: 1rem 0;
    height: 25px;
    border-radius: 5px;
    background-color: #2e2e2e;
    color: #ffffff;
    width: 250px;
    border: 1px solid #ffffff;
  }
`