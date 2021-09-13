import React, { useState, useEffect } from "react";
import BookApi from "../services/booktrackerapi"
import BookRead from "./BookRead"
import styled from 'styled-components'

const BookItem = ({book, booksList, setBooksList}) => {
    const [mode,setMode] = useState(true)
    const [copyBook, setCopyBook] = useState(book)
    const [conclusion, setConclusion] = useState()

    useEffect(() => {
        if(copyBook.concluido == null){
            setConclusion(new Date())
        } else {
            setConclusion(dateUnformat(copyBook.concluido))
        }
    }, [])

    const handleDateChange = (date) =>{
        BookApi.update(book.id, {concluido: dateFormat(date)})
		.then(response =>{
            setConclusion(dateUnformat(response.concluido))
            setCopyBook(response)  
		})
    }

    const handleDelete = (id) => {
        BookApi.remove(id.toString())
        .then(response => {
            setBooksList(booksList.filter(n => n.id !== id))
        }).catch(error => {
            alert("Erro ao remover livro!")
        })
    }

    const handleRatingChange = (event) => {
        BookApi.update(book.id, {nota: event.target.value})
		.then(response =>{
            setCopyBook(response)  
		})
    }

    const handleStatusChange = (event) => {
        BookApi.update(book.id, {status: event.target.value})
		.then(response =>{			
            setCopyBook(response)
            
		})    
    }

    const dateFormat = (unDate = new Date()) => {
        return [unDate.getFullYear(), unDate.getMonth()+1, unDate.getDate() ]
          .map(n => n < 10 ? `0${n}` : `${n}`).join('-');
    }

    const dateUnformat = (date) =>{
        const dateParts = date.split("-")
        return new Date(dateParts[0], dateParts[1]-1, dateParts[2])
    }

    if(mode) {
        return (
            <Wrapper>
                    <h3>Título: {book.titulo}</h3> 
                    <h4>Autor: {book.autor}</h4>
                    <button onClick={() => setMode(!mode)} type="submit">Expandir</button>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <h3>Titulo: {book.titulo}</h3> 
                <Propriedade>ID: {book.id}</Propriedade> 
                <Propriedade>Autor: {book.autor}</Propriedade> 
                <Propriedade>Adicionado Em: {book.adicionado}</Propriedade>
                <Propriedade>Status: 
                    <select value={copyBook.status} onChange={handleStatusChange}>
                        <option value='0'> Quero Ler </option>
                        <option value='1'> Lendo </option>
                        <option value='2'> Lido </option>
                    </select>
                </Propriedade>
                {
                    copyBook.status === 2 
                    ?
                        <BookRead 
                        rating={copyBook.nota} 
                        conclusion={conclusion} 
                        setRating={handleRatingChange} 
                        setConclusion={handleDateChange} 
                        /> 
                    : 
                        '' 
                    }
                <button onClick={() => setMode(!mode)} type="submit">Esconder</button>
                <button onClick={() => handleDelete(book.id)} type="submit">Deletar</button>
            </Wrapper>
        )
    };
}

const Wrapper = styled.div`
	background-color: #fff;
	border-radius: 4px;
    width: 100%;
	margin: 10px;
	position: relative;
	padding: 34px;
	color: #444;
	cursor: pointer;

    > button {
        height: 40px;
        border-radius: 5px;
        background-color: #2e2e2e;
        color: #ffffff;
        width: 120px;
        border: 1px solid #ffffff;
        margin: 10px 5px;
      }

    > p {
        font-weight: 700;
    }
  `

const Propriedade = styled.p`
    font-weight: 700;
`

export default BookItem;