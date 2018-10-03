import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { capitalize } from 'lodash'

import { addIngredient, updateCurrentPrice, updateChosenIngredients } from '../actions/actions'

class IngredientsSection extends Component {
  
  onClickMore = (type, amount) => {
    const { addIngredient, updateCurrentPrice, updateChosenIngredients } = this.props
    addIngredient(type, 1)
    updateCurrentPrice(amount)
    updateChosenIngredients(type, 'add')
  }
  onClickLess = (type, amount) => {
    const { addIngredient, updateCurrentPrice, updateChosenIngredients } = this.props
    addIngredient(type, -1)
    updateCurrentPrice(amount)
    updateChosenIngredients(type, 'remove')
  }
  render () {
    const { ingredients, currentPrice } = this.props
    return (
      <IngredientsSectionWrapper>
        <CurrentPrice>Current Price: {currentPrice}</CurrentPrice>
        {
          ingredients.map(item => (
            <IngredientWrapper key={item.type}>
              {capitalize(item.type)}: {item.amount}
              <button onClick={() => this.onClickLess(item.type, -1 * item.price)}>Less</button>
              <button onClick={() => this.onClickMore(item.type, item.price)}>More</button>
            </IngredientWrapper>
          ))
        }
        <OrderButton> ORDER NOW </OrderButton>
      </IngredientsSectionWrapper>
    )
  }
}

const IngredientsSectionWrapper = styled.div`
  background-color: brown
  color: white
  height: 50%
  width: 100%
  display: flex
  flex-direction: column
  justify-content: flex-end
  align-items: center
`
const IngredientWrapper = styled.div`
  margin: 0.5em
  width: 15%
  display: flex
  justify-content: space-between
`
const OrderButton = styled.button`
  width: 100px
  margin-bottom: 5px
  background-color: yellow
  color: black
`
const CurrentPrice = styled.p`
  color: black
`
const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
  currentPrice: state.currentPrice
})

const mapDispatchToProps = {
  addIngredient,
  updateCurrentPrice,
  updateChosenIngredients
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsSection)
