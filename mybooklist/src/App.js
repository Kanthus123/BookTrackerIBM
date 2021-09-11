import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";

function App() {
	const [titulo, setTitulo] = useState("Batata 1")
	const [livros, setLivros] = useState([{key : 0,title : "Batata 1", lido : false , nota : "Sem nota",autor : "Batata Mestra"},{key : 1,title : "Batata 2", lido : false, nota : "Sem nota",autor : "Batata Mestra"},{key : 2,title : "Batata 3", lido : false, nota : "Sem nota",autor : "Batata Mestra"}]);
	const [fresh,setFresh] = useState(false);
	const [novoLivro, setNovoLivro] = useState("")

	useEffect(() => {
		if(fresh === false) {
			console.log("Not fresh!");
			console.log(livros);
		} else {
			console.log("fresh!");
		}
	},[]);

	function addLivro() {
		var l = livros;
		console.log("Update!");
		livros.push({key : livros.length, title : novoLivro, lido : false});
		setLivros(l);
		setFresh(false);
		setNovoLivro("");
	}

	function setLido(i) {
		var l = livros;
		l[i].lido = !l[i].lido;
		console.log(l)
		setLivros(l);
		setFresh(!fresh);
	}
	function setNota(i,n) {
		var l = livros;
		l[i].nota = n
		console.log(l)
		setLivros(l);
		setFresh(!fresh);
	}
	
	return (
		<div className="App">
			<header className="App-header">
				<BookList books={livros} setLido={setLido} setNota={setNota} />
				<br>
				</br>
				<input value={novoLivro} onChange={(e) => setNovoLivro(e.target.value)}/>
				<button onClick={() => addLivro()}>
					Adciona livro
				</button>
			</header>
		</div>
	);
}

function ListItem(props) {
	const [mudarNota,setMudarNota] = useState(false);

	function setNota(e) {
		props.setNota(props.book.key,e)
		setMudarNota(false);
	}

	if (props.book.lido) {
		return <div key={props.book.key}>
			<b>{props.book.title}</b><br/>
			{props.book.autor}
			<br/>
			{mudarNota ?
			<select onChange={(e) => setNota(e.target.value)}>
				<option value="10">10</option>
				<option value="9">9</option>
				<option value="8">8</option>
				<option value="7">7</option>
				<option value="6">6</option>
				<option value="5">5</option>
				<option value="4">4</option>
				<option value="3">3</option>
				<option value="2">2</option>
				<option value="1">1</option>
				<option value="0">0</option>
				<option value="Sem nota">Sem nota</option>
			</select> : <div>Nota: {props.book.nota} <br/> <button onClick={() => setMudarNota(true)}> Mudar nota</button> </div> }
			
			<button onClick={() => props.setLido(props.book.key)}> Não lido</button> 
		</div>;
	} else {
		return <div key={props.book.key}>
			<b>{props.book.title}</b>
			<button onClick={() => props.setLido(props.book.key)}>Lido</button> 
		</div>;
	}
}

function BookList(props) {
	const books = props.books;
	const listBooks = books.map((book) =>
	
	<ListItem key={book.key} book={book}  setLido={props.setLido} setNota={props.setNota} />
	);

	return (
		<ul>
			{listBooks}
		</ul>
	);
}

export default App;
