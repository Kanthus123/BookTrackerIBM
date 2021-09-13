import styled from 'styled-components'
import BookItem from './BookItem'

const BookList = ({booksList, setBooksList, fresh}) => {

    //Fresh True = Mostar Livros   Fresh False = Mensagem de Espera/Banco Vazio
    if(fresh) {
        return (
            <Wrapper>
                {booksList.map((book) => 
                    <BookItem 
                        key={book.id}
                        book={book} 
                        booksList={booksList} 
                        setBooksList={setBooksList} 
                    />
                )}
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                As Informações estão carregando ou não existem livros cadastrados!
            </Wrapper>
        )
    }    
}

export default BookList;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex:50%;
  margin: 1rem;

  > div{
      width: 20%;
  }
  `
