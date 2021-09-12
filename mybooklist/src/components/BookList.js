import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import BookItem from './BookItem'

const BookList = (props) => {

    if(props.fresh) {
        return (
            <Wrapper>
                <div>
                    {props.livros.map((livro) => 
                     <BookItem livro={livro} editLivro={props.editLivro} />
                    )}
                </div>
            </Wrapper>
        )
    } else {
        return (
            <Wrapper>
                <div>
                        As Informações estão carregando ou não existem livros cadastrados!
                </div>
            </Wrapper>
        )
    }
    
    
}

export default BookList;

const Wrapper = styled.div`
  display: flex;
  flex:50%;
  margin: 1rem;
  `
