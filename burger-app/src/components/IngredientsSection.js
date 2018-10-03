import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { capitalize } from 'lodash'

import { addIngredient } from '../actions/actions'

class IngredientsSection extends Component {
  render () {
    const { ingredients, addIngredient } = this.props
    return (
      <IngredientsSectionWrapper>
        {
          ingredients.map(item => (
            <IngredientWrapper key={item.type}>
              {capitalize(item.type)}: {item.amount}
              <button onClick={() => addIngredient(item.type, -1)}>Less</button>
              <button onClick={() => addIngredient(item.type, 1)}>More</button>
            </IngredientWrapper>
          ))
        }
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
const mapStateToProps = (state) => ({
  ingredients: state.ingredients
})

const mapDispatchToProps = {
  addIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsSection)
