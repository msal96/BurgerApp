import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CheckoutBurgers = props => {
  const basket = [...props.basket]
  const {totalPrice} = props
  return (
    <CheckoutDiv>
          Your Basket
      {basket.map((item, index) =>
        <Column key={index}>
          {item.ingredients.map((ingredient, index) =>
            <div key={index}>
              <p>{ingredient.type}: {ingredient.amount}</p>
            </div>)}
          <Price>Price: {item.price}</Price>
        </Column>
      )}
      <TotalPrice>Total: {totalPrice}</TotalPrice>
    </CheckoutDiv>
  )
}
const mapStateToProps = state => ({
  basket: state.basket,
  totalPrice: state.totalPrice
})
export default connect(mapStateToProps, null)(CheckoutBurgers)

const CheckoutDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
`
const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.5em 1em 1em 1em;
  border-radius: 1em;
  background-color: antiquewhite;
  margin: 2em 1em;
  text-transform: capitalize;
`
const Price = styled.div`
  font-weight: bold;
`
const TotalPrice = styled.div`
  font-weight: bold;
  margin-left: 1em;
`