import React, { Component } from 'react'
import styled from 'styled-components'

export default class IngredientsSection extends Component {
  state = {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  }
  onClickLess = (ingredient) => {
    let value = 0
    switch (ingredient) {
      case 'salad':
        value = this.state.salad - 1
        this.setState({ salad: value })
        break
      case 'bacon':
        value = this.state.bacon - 1
        this.setState({ bacon: value })
        break
      case 'cheese':
        value = this.state.cheese - 1
        this.setState({ cheese: value })
        break
      case 'meat':
        value = this.state.meat - 1
        this.setState({ meat: value })
        break
      default: return
    }
  }
  onClickMore = (ingredient) => {
    let value = 0
    switch (ingredient) {
      case 'salad':
        value = this.state.salad + 1
        this.setState({ salad: value })
        break
      case 'bacon':
        value = this.state.bacon + 1
        this.setState({ bacon: value })
        break
      case 'cheese':
        value = this.state.cheese + 1
        this.setState({ cheese: value })
        break
      case 'meat':
        value = this.state.meat + 1
        this.setState({ meat: value })
        break
      default: return
    }
  }
  render() {
    const { salad, bacon, cheese, meat } = this.state
    return (
      <IngredientsSectionWrapper>
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
      </IngredientsSectionWrapper>
    )
  }
}

const IngredientsSectionWrapper = styled.div`
  background-color: brown
  color: white
  height: 10em
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