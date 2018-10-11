import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {
  BreadBottom,
  BreadTop,
  Meat,
  Cheese,
  Salad,
  Bacon
} from '../styling/ingredientsStyling'

class Burger extends Component {
  renderStartingMessage = () => {
    const arr = this.props.chosenIngredients
    if (arr.length <= 0) {
      return (
        <StartingMessage>Please insert your burger ingredients</StartingMessage>
      )
    }
  }
  
  render () {
    const arr = [...this.props.chosenIngredients].reverse()
    console.log('arrr:', arr)
    return (
      <BurgerWrapper>
        <BreadTop />
          { this.renderStartingMessage() }
          { arr.map((item, index) =>
            item === 'salad' ? <Salad key={index} />
              : item === 'meat' ? <Meat key={index} />
                : item === 'cheese' ? <Cheese key={index} />
                  : item === 'bacon' ? <Bacon key={index} /> : null) }
        <BreadBottom />
      </BurgerWrapper>
    )
  }
}

const StartingMessage = styled.p`
  text-align: center
  font-family: sans-serif
`

const mapStateToProps = state => ({
  chosenIngredients: state.chosenIngredients
})
const BurgerWrapper = styled.div`
  height: 50%
`
export default connect(mapStateToProps, null)(Burger)
