import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../styling/logo.png'

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt='logo' />
      <HeaderButtonsWrapper>
        <NavLink to='/'>
          <HeaderButton>Burger Builder</HeaderButton>
        </NavLink>
        <NavLink to='/checkout'>
          <HeaderButton>Checkout</HeaderButton>
        </NavLink>
      </HeaderButtonsWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
    width: 100%;
    height: 3em;
    background-color: #6a3810;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.img`
  margin: 1em;
  width: 50px;
  height 40px;
`
const HeaderButtonsWrapper = styled.div`
    display: flex;
    align-items: center;
`
const HeaderButton = styled.button`
  margin: 0 1em;
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1em;
    transition: all 0.15s ease-in-out;
    box-sizing: border-box;
    padding: 0.75em;
    &:focus {
    outline: none;
  }
  &:hover {
    background-color: #885a32;
  }
`

export default Header
