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

	const [livros, setLivros] = useState({})
    const [fresh,setFresh] = useState(false)

	const getLivrosInfo = (event) => {
        axios.get('http://localhost:8000/api/booktrackerapi/')
        .then(response => {
            console.log(response.data)
        });
    }

	function editLivro(newLivro){
		// muda o livro aqui
	}

	useEffect(() => {
        if (fresh === false){
            axios.get('http://localhost:8000/api/booktrackerapi/')
            .then(response => {
                console.log(response.data)
                for(var i = 0;i < response.data.length;i++){
                    if(!response.data[i].concluido){
                        response.data[i].concluido = "-----"
                    }
                }
                setLivros(response.data)
                setFresh(true);
            });
        }
    },[]);


	return (
		<AppWrapper>
			<BookForm setFresh={setFresh}/>
			<BookList livros={livros} setLivros={setLivros} fresh={fresh} setFresh={setFresh} editLivro={editLivro} />
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div`
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);
font-family: 'Roboto', sans-serif;
background-color: #eeeeee;
`