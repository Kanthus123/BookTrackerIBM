import React, {useState, useEffect } from "react";
import styled from 'styled-components'
import axios from 'axios'


//Components
import BookForm from './components/BookForm'
import BookList from './components/BookList'
//import BookItem from './components/BookItem'

function App() {
	
	/* 
	titulo: response.data.titulo,
	autor: response.data.autor,
	adicionado: response.data.adicionado,
	concluido: response.data.concluido,
	nota: response.data.nota,
	status: response.data.status
	 */

	const [livrosLista,setLivrosLista] = useState()
	const [livro,setLivro] =  useState()
	const [livros, setLivros] = useState({})
    const [isLoaded,setIsLoaded] = useState(false);
    const [fresh,setFresh] = useState(false)

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


	/* const livro = {titulo: response.data.titulo,
		autor: response.data.autor,
		adicionado: response.data.adicionado,
		concluido: response.data.concluido,
		nota: response.data.nota,
		status: response.data.status
		};

	const setLivros = () => {
		axios
		.post('https://localhost:8000/api/booktrackerapi/', livro)
		.then(response => {
			setLivro(
				{
					livroId: response.data.id
				})
		})
	} */

	const getLivrosInfo = (event) => {
        axios.get('http://localhost:8000/api/booktrackerapi/')
        .then(response => {
            console.log(response.data)
        });
    }

	function editLivro(newLivro){
		// muda o livro aqui
	}

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