import React from 'react'
import styled from 'styled-components'

const Modal = (props) => {
    return (
        <ModalWrapper>
            {props.children}
        </ModalWrapper>
    )
}

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    padding: 1em;
    border: 1px solid #ccc;
    box-shadow 1px 1px 1px black;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: 0.2s all ease-in-out
    @media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px)
    }
`

export default Modal