import React, {useState, useEffect } from "react";
import styled from 'styled-components'
import axios from 'axios'


//Components
import BookForm from './components/BookForm'
import BookList from './components/BookList'
//import BookItem from './components/BookItem'

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

	const [livrosList, setLivros] = useState({})
    const [fresh,setFresh] = useState(false)

	useEffect(() => {
        if (fresh === false){
            axios.get('http://localhost:8000/api/booktrackerapi/')
            .then(response => {
                console.log(response.data)
                setLivros(response.data)
                setFresh(true);
            });
        }
    },[fresh]);


	return (
		<AppWrapper>
			<BookForm livrosList={livrosList} setLivros={setLivros} setFresh={setFresh}/>
			<BookList livrosList={livrosList} setLivros={setLivros} fresh={fresh} setFresh={setFresh} />
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