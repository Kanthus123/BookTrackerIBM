import React from 'react'

import { fireEvent, render} from '@testing-library/react'

import BookForm from '../BookForm'

// Sucessos em tentar fazer testes em React


describe('Testando BookForm Componente', () => {
    it('Deve conseguir preencher o campo de titulo', () => {
        const { getByTestId } = render(<BookForm />)
        const inputEle = getByTestId("input-titulo");

        fireEvent.change(inputEle, {target: { value: "Titulo Teste" }})
        expect(inputEle.value).toBe("Titulo Teste")
    })
})

describe('Testando BookForm Componente', () => {
    it('Deve conseguir preencher o campo de autor', () => {
        const { getByTestId } = render(<BookForm />)
        const inputEle = getByTestId("input-autor");

        fireEvent.change(inputEle, {target: { value: "Autor Novato" }})
        expect(inputEle.value).toBe("Autor Novato")
    })
})
