import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Extra from './Extra'

import { 
  addIngredient, 
  updateCurrentPrice, 
  updateChosenIngredients, 
  toggleModal, 
  initialIngredientsLoad 
} from '../actions/actions'

class IngredientsSection extends Component {
  
  onClickMore = (type, amount) => {
    const { addIngredient, updateCurrentPrice, updateChosenIngredients } = this.props
    addIngredient(type, 1)
    updateCurrentPrice(amount)
    updateChosenIngredients(type, 'add')
  }
  onClickLess = (type, amount) => {
    const { addIngredient, updateCurrentPrice, updateChosenIngredients, ingredients } = this.props
    let result = ingredients.map(item => item.type === type && item.amount>0)
    if(result.includes(true)) {
    addIngredient(type, -1)
    updateCurrentPrice(amount)
    updateChosenIngredients(type, 'remove')
    }
  }

  componentDidMount () {
    this.props.initialIngredientsLoad()
  }

  render() {
    const { ingredients, currentPrice, toggleModal } = this.props
    return (
      <IngredientsSectionWrapper>
        <ExtraDiv>
            <Extra />
        </ExtraDiv>
        <ExtraDiv>
        <CurrentPrice>Current Price: {currentPrice}</CurrentPrice>
        {
          ingredients.normal.map(item => (
            <IngredientWrapper key={item.type}>
              <IngredientName>{(item.type)}:</IngredientName> 
              <IngredientAmount>{item.amount}</IngredientAmount>
              <SelectQuantityButton
                onClick={() => this.onClickLess(item.type, -1 * item.price)}> Less
              </SelectQuantityButton>

              <SelectQuantityButton
                onClick={() => this.onClickMore(item.type, item.price)}> More
              </SelectQuantityButton>
            </IngredientWrapper>
          ))
        }
        <OrderButton onClick={() => toggleModal(true)}> ORDER NOW </OrderButton>
        <NavLink to='/checkout'><OrderButton> Go to checkout </OrderButton></NavLink>
        </ExtraDiv>
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
  align-items: center
  justify-content: center;
  font-family: Kodchasan
`
const IngredientWrapper = styled.div`
  margin: 0.5em
  width: 20%
  display: flex
  justify-content: flex-end
  align-items: center
`
const ExtraDiv = styled.div`
  margin: 0.5em
  width: 50%
  display: flex
  justify-content: center
  flex-direction: column
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
const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
  currentPrice: state.currentPrice,
  showModal: state.showModal
})

const mapDispatchToProps = {
  addIngredient,
  updateCurrentPrice,
  updateChosenIngredients,
  toggleModal,
  initialIngredientsLoad
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsSection)
