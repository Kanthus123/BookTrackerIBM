import React, { useState } from 'react'
import styled from 'styled-components'

import BookRead from './BookRead'

const BookForm = () => {
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
    return [unDate.getDate(), unDate.getMonth()+1, unDate.getFullYear()]
      .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    //API VAI AQUI
    const Obj = {
      title: title,
      author: author,
      status: status,
      date: dateFormat()
    }
    if ( status === 2 ) {
      Obj.rating = rating
      Obj.conclusion = dateFormat(conclusion)
    }
    console.log(Obj)
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
    color: #ffffff;
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