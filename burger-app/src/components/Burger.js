import React, {Component} from 'react'
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
  render () {
    const arr = this.props.chosenIngredients
    return (
      <BurgerWrapper>
        <BreadTop />
        { arr.map(item =>
          item === 'salad' ? <Salad />
            : item === 'meat' ? <Meat />
              : item === 'cheese' ? <Cheese />
                : item === 'bacon' ? <Bacon /> : null) }
        <BreadBottom />
      </BurgerWrapper>
    )
  }
}
const mapStateToProps = state => ({
  chosenIngredients: state.chosenIngredients
})
const BurgerWrapper = styled.div`
  height: 50%
`
export default connect(mapStateToProps, null)(Burger)
