import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>Logo</Logo>

            <HeaderButtonsWrapper>
                <HeaderButton>Burger Builder</HeaderButton>
                <HeaderButton>Checkout</HeaderButton>
            </HeaderButtonsWrapper>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    width: 100%
    height: 3em
    background-color: #6a3810
    color: white
    display: flex
    justify-content: space-between
    align-items: center
`
const Logo = styled.div`
    margin: 1em

`
const HeaderButtonsWrapper = styled.div`
`
const HeaderButton = styled.button`
    margin: 1em
    background-color: transparent
    border: none
    color: white
    cursor: pointer
    font-size: 1em
`

export default Header