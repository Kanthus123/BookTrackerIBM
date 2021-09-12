import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const BookItem = (props) => {
    const [modo,setModo] = useState(true);

    const handleSubmit = (event) => {
        const id = event.toString();
        console.log(id)
        axios.delete('http://127.0.0.1:8000/api/booktrackerapi/' + id + "/")
        .then(response => {
            console.log(response.data)
        })
    }

    if(modo) {
        return (
            <Wrapper onClick={() => setModo(!modo)}>
                    <h3>Livro: {props.livro.titulo}</h3> 
                    <br/>
                    <h4>Autor: {props.livro.autor}</h4>
                    
            </Wrapper>
        )
    } else {
        return (
            <Wrapper onClick={() => setModo(!modo)}>
                    <h3>Livro: {props.livro.titulo}</h3> 
                    <br/>
                    <b>ID: {props.livro.id}</b> <br/>
                    <b>Autor: {props.livro.autor}</b> <br/>
                    <b>Adicionado Em: {props.livro.adicionado}</b> <br/>
                    <b>Concluido Em: {props.livro.concluido}</b> <br/>
                    <b>Nota: {props.livro.nota}</b> <br/>
                    <b>Status: {props.livro.status} </b><br/>
                    <button onClick={() => handleSubmit(props.livro.id)} type="submit">Deletar</button>
                    <button >Editar</button>
            </Wrapper>
        )
    };
}

const Wrapper = styled.div`
	background-color: #fff;
	border-radius: 4px;
    width: 100%;
	margin: 0% auto;
	position: relative;
	padding: 34px;
	color: #444;
	cursor: pointer;

    > button {
        background-color: #e7e7e7; 
        color: black;
        border: 10%;
        padding: 5px 5px 5px 5px;
        margin: 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }

  `

export default BookItem;