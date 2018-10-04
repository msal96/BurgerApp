import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { capitalize } from 'lodash'

import { addIngredient, updateCurrentPrice } from '../actions/actions'

class IngredientsSection extends Component {

  onClickMore = (type, amount) => {
    const { addIngredient, updateCurrentPrice } = this.props
    addIngredient(type, 1)
    updateCurrentPrice(amount)
  }
  onClickLess = (type, amount) => {
    const { addIngredient, updateCurrentPrice } = this.props
    addIngredient(type, -1)
    updateCurrentPrice(amount)
  }
  render() {
    const { ingredients, currentPrice } = this.props
    return (
      <IngredientsSectionWrapper>
        <CurrentPrice>Current Price: {currentPrice}</CurrentPrice>
        {
          ingredients.map(item => (
            <IngredientWrapper key={item.type}>
              {capitalize(item.type)}: {item.amount}
              <SelectQuantityButton
                onClick={() => this.onClickLess(item.type, -1 * item.price)}> -
              </SelectQuantityButton>

              <SelectQuantityButton
                onClick={() => this.onClickMore(item.type, item.price)}> +
              </SelectQuantityButton>
            </IngredientWrapper>
          ))
        }
        <OrderButton> ORDER NOW </OrderButton>
      </IngredientsSectionWrapper>
    )
  }
}

const IngredientsSectionWrapper = styled.div`
  background-color: #c58d3c
  color: #280f02
  width: 100%
  padding: 1.5em 0
  display: flex
  flex-direction: column
  justify-content: flex-end
  align-items: center
  font-family: Kodchasan
`
const IngredientWrapper = styled.div`
  margin: 0.5em 2em
  width: 20%
  display: flex
  justify-content: space-between
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

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
  currentPrice: state.currentPrice
})

const mapDispatchToProps = {
  addIngredient,
  updateCurrentPrice
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsSection)
