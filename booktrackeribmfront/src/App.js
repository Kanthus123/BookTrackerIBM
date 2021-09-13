import React, {useState, useEffect } from "react";
import styled from 'styled-components'

//Services
import BookApi from "./services/booktrackerapi"

//Components
import BookForm from './components/BookForm'
import BookList from './components/BookList'

function App() {

	const [booksList, setBooksList] = useState({})
    const [fresh,setFresh] = useState(false)

	useEffect(() => {
        if (fresh === false){
            BookApi.getAll()
            .then(response => {
                setBooksList(response)
                setFresh(true);
            });
        }
    },[fresh]);


	return (
		<AppWrapper>
			<BookForm booksList={booksList} setBooksList={setBooksList} setFresh={setFresh}/>
			<BookList booksList={booksList} setBooksList={setBooksList} fresh={fresh}/>
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