import React, { Component } from 'react'
import styled from 'styled-components'

export default class IngredientsSection extends Component {
  state = {
    currentPrice: 0,
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  }
  onClickLess = (ingredient) => {
    let amount = 0
    let price = this.state.currentPrice
    switch (ingredient) {
      case 'salad':
      amount = this.state.salad - 1
        this.setState({ currentPrice: price - 1, salad: amount })
        break
      case 'bacon':
      amount = this.state.bacon - 1
        this.setState({ currentPrice: price - 3, bacon: amount })
        break
      case 'cheese':
      amount = this.state.cheese - 1
        this.setState({ currentPrice: price - 2, cheese: amount })
        break
      case 'meat':
      amount = this.state.meat - 1
        this.setState({ currentPrice: price - 4, meat: amount })
        break
      default: return
    }
  }
  onClickMore = (ingredient) => {
    let amount = 0
    let price = this.state.currentPrice
    switch (ingredient) {
      case 'salad':
      amount = this.state.salad + 1
        this.setState({ currentPrice: price + 1, salad: amount })
        break
      case 'bacon':
      amount = this.state.bacon + 1
        this.setState({ currentPrice: price + 3, bacon: amount })
        break
      case 'cheese':
      amount = this.state.cheese + 1
        this.setState({ currentPrice: price + 2, cheese: amount })
        break
      case 'meat':
      amount = this.state.meat + 1
        this.setState({ currentPrice: price + 4, meat: amount })
        break
      default: return
    }
  }
  orderHandler = () => {
    
  }
  render() {
    const { currentPrice, salad, bacon, cheese, meat } = this.state
    return (
      <IngredientsSectionWrapper>
        <CurrentPriceP>Current Price: {currentPrice}</CurrentPriceP>
        <IngredientWrapper>
          Salad: {salad}
          <button onClick={() => this.onClickLess('salad')}>Less</button>
          <button onClick={() => this.onClickMore('salad')}>More</button>
        </IngredientWrapper>

        <IngredientWrapper>
          Bacon: {bacon}
          <button onClick={() => this.onClickLess('bacon')}>Less</button>
          <button onClick={() => this.onClickMore('bacon')}>More</button>
        </IngredientWrapper>

        <IngredientWrapper>
          Cheese:  {cheese}
          <button onClick={() => this.onClickLess('cheese')}>Less</button>
          <button onClick={() => this.onClickMore('cheese')}>More</button>
        </IngredientWrapper>

        <IngredientWrapper>
          Meat: {meat}
          <button onClick={() => this.onClickLess('meat')}>Less</button>
          <button onClick={() => this.onClickMore('meat')}>More</button>
        </IngredientWrapper>
        <OrderButton onClick={this.orderHandler}>ORDER NOW</OrderButton>
      </IngredientsSectionWrapper>
    )
  }
}

const IngredientsSectionWrapper = styled.div`
  background-color: brown
  color: white
  height: 12em
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
  background-color: yellow
  color: black
  margin-bottom: 5px
`
const CurrentPriceP = styled.p`
  color: black
`