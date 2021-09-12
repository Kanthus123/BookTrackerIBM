import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const BookItem = (props) => {
    const [modo,setModo] = useState(true);

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
                    <button color="red">Deletar</button>
                    <button color="green">Editar</button>
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
	
  `

export default BookItem;