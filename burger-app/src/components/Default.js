import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { toggleModal } from '../actions/actions'

const Default = (props) => {
  const { defaultIngredients, currentPrice, toggleModal  } = props

  return (
    <Wrapper>
      <CurrentPrice> Current Price: { currentPrice } </CurrentPrice>
      {
        defaultIngredients.map(item => (
          <IngredientWrapper key={item.type}>
            <IngredientName>{(item.type)}:</IngredientName> 
            <IngredientAmount>{item.amount}</IngredientAmount>
            <SelectQuantityButton
              onClick={() => props.onClickLess(item.type, -1 * item.price)}> Less
            </SelectQuantityButton>

            <SelectQuantityButton
              onClick={() => props.onClickMore(item.type, item.price)}> More
            </SelectQuantityButton>
          </IngredientWrapper>
        ))
      }
      <OrderButton onClick={() => toggleModal(true)}> Order now </OrderButton>
      <NavLink to='/checkout'>
        <OrderButton> Go to checkout </OrderButton>
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex
  justify-content: center
  flex-direction: column
  width: 50%
`
const IngredientWrapper = styled.div`
  margin: 0.5em
  width: 20%
  display: flex
  justify-content: flex-end
  align-items: center
`
const OrderButton = styled.button`
  padding: 0.5em
  margin: 2em
  width: 100px
  margin-bottom: 5px
  background-color: yellow
  color: black
  cursor: pointer
  border: none
  border-radius: 10px
  tex-transform: capitalize
  &:focus {
    outline: none
  }
  &:hover {
    background-color: #6FB748
    color: white
  }
`
const CurrentPrice = styled.p`
  color: black
  font-weight: bold
`
const SelectQuantityButton = styled.button`
  padding: 0.5em 0.75em
  margin: 0 2em
  cursor: pointer
  border: none
  border-radius: 20px
  background-color: #6a3810
  color: white
  &:focus {
    outline: none
  }
  &:hover {
    background-color: #885a32
  }
`
const IngredientName = styled.span`
  text-transform: capitalize
`
const IngredientAmount = styled.span`
  padding: 0 2em
`

const mapStateToProps = state => ({
  defaultIngredients: state.ingredients.normal,
  currentPrice: state.currentPrice
})

const mapDispatchToProps = {
  toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Default)

