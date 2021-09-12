import React, {useState, useEffect } from "react";
import styled from 'styled-components'
import axios from 'axios'

//Services
import BookApi from "./services/booktrackerapi"

//Components
import BookForm from './components/BookForm'
import BookList from './components/BookList'

function App() {
	
	/*
	Campos do Banco
	
	titulo: response.data.titulo,
	autor: response.data.autor,
	adicionado: response.data.adicionado,
	concluido: response.data.concluido,
	nota: response.data.nota,
	status: response.data.status
	 */

	const [livrosList, setLivrosList] = useState({})
    const [fresh,setFresh] = useState(false)

	useEffect(() => {
        if (fresh === false){
            BookApi.getAll()
            .then(response => {
                console.log(response)
                setLivrosList(response)
                setFresh(true);
            });
        }
    },[fresh]);


	return (
		<AppWrapper>
			<BookForm livrosList={livrosList} setLivrosList={setLivrosList} setFresh={setFresh}/>
			<BookList livrosList={livrosList} setLivrosList={setLivrosList} fresh={fresh}/>
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
	@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
	font-family: 'Roboto', sans-serif;
	background-color: #eeeeee;
	margin: 5vh 0;
`