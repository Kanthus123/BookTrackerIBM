import axios from "axios";
import React, { useState, useEffect } from "react";
import BookApi from "../services/booktrackerapi"
import styled from 'styled-components'

const BookItem = ({livro, livrosList, setLivrosList}) => {
    const [modo,setModo] = useState(true);

    const handleDelete = (id) => {
        BookApi.deletar(id.toString())
        .then(response => {
            setLivrosList(livrosList.filter(n => n.id !== id))
            console.log(response)
        }).catch(error => {
            alert("Erro ao remover livro!")
        })
    }

    const handleEdit = (event) => {
        const id = event.toString();

    }

    const returnStatus = (status) => {
        switch (status) {
            case 0: 
                return "Quero Ler" 
            case 1:
                return "Lendo" 
            case 2:
                return "Lido" 
            default:
                break;
        }
    }

    if(modo) {
        return (
            <Wrapper >
                    <h3>Livro: {livro.titulo}</h3> 
                    <h4>Autor: {livro.autor}</h4>
                    <button onClick={() => setModo(!modo)} type="submit">Expandir</button>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                    <h3>Livro: {livro.titulo}</h3> 
                    <Propriedade>ID: {livro.id}</Propriedade> 
                    <Propriedade>Autor: {livro.autor}</Propriedade> 
                    <Propriedade>Adicionado Em: {livro.adicionado}</Propriedade> 
                    {livro.status === 2 ? <Propriedade>Concluido Em: {livro.concluido}</Propriedade>  : ""}
                    {livro.status === 2 ? <Propriedade>Nota: {livro.nota}</Propriedade>   : ""}
                    <Propriedade>Status: {returnStatus(Number(livro.status))} </Propriedade>
                    <button onClick={() => setModo(!modo)} type="submit">Esconder</button>
                    <button onClick={() => handleDelete(livro.id)} type="submit">Deletar</button>
                    <button onClick={() => handleEdit(livro.id)} type="submit">Editar</button>
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
      }
  `
/* > button {
        background-color: #e7e7e7; 
        color: black;
        border: 10%;
        padding: 5px;
        width: 100px;
        margin: 10px 5px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
} */


const Propriedade = styled.p`
    font-weight: 700;
`

export default BookItem;