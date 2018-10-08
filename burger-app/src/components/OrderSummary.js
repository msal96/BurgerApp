import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { toggleModal, addToBasket, resetIngredients } from '../actions/actions'

const OrderSummary = props => {
  const ingredientSummary = props.ingredients.map(item => (
    <ListItem key={item.type}>
      {item.amount} <IngredientName>{item.type}</IngredientName>
    </ListItem>
  ))
  const addToBasketAndResetIngredients = () => {
    const { addToBasket, resetIngredients, toggleModal } = props
    addToBasket()
    resetIngredients()
    toggleModal(false)
  }
  return (
    <OrderSummaryWrapper>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <button onClick={() => props.toggleModal(false)}>Cancel</button>
      <button onClick={() => addToBasketAndResetIngredients()}>Add to basket and make other burger</button>
    </OrderSummaryWrapper>
  )
}

const OrderSummaryWrapper = styled.div`
  font-family: Kodchasan;
`
const ListItem = styled.li`
  list-style: none;
`
const IngredientName = styled.span`
  text-transform: capitalize;
`

const mapDispatchToProps = {
  toggleModal,
  addToBasket,
  resetIngredients
}

export default connect(
  null,
  mapDispatchToProps
)(OrderSummary)
