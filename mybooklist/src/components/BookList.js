import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import BookItem from './BookItem'

const BookList = ({livrosList, setLivros, fresh, setFresh}) => {

    if(fresh) {
        return (
            <Wrapper>
                {livrosList.map((livro) => 
                    <BookItem 
                        key={livro.id}
                        livro={livro} 
                        livrosList={livrosList} 
                        setLivros={setLivros} 
                        fresh={fresh} 
                        setFresh={setFresh}
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
