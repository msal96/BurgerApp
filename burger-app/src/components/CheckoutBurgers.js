import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CheckoutBurgers = props => {
  console.log('ssss', props.basket)
  const basket = [...props.basket]
  const {totalPrice} = props
  return (
    <CheckoutDiv>
          Your Basket
      {basket.map((item, index) =>
        <div key={index}>
          {item.ingredients.map((ingredient, index) =>
            <div key={index}>
              <p>{ingredient.type}: {ingredient.amount}</p>
            </div>)}
          <div>Price: {item.price}</div>
        </div>
      )}
      <div>Total: {totalPrice}</div>
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
  justify-content: center
  background-color: yellow
`
