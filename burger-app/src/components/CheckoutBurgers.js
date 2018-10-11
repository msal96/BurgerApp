import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {startCartLoad, startSendingOrder} from '../actions/actions'

class CheckoutBurgers extends Component {
  // const basket = [...props.basket]
  // const {totalPrice} = props
  componentDidMount () {
    const {startCartLoad} = this.props
    startCartLoad()
  }
  render () {
    console.log('checkout cart:', this.props.cart)
    const {burgers, totalPrice} = this.props.cart
    console.log('prood', burgers)
    return (
      <CheckoutDiv>
        <ObjectDiv>{`Your Basket's Total: ${totalPrice}`}</ObjectDiv>
        <ObjectDiv>{burgers.map((item, index) => <div key={index}>{JSON.stringify(item)}</div>)}</ObjectDiv>
        <PlaceOrder onClick={() => this.props.startSendingOrder()}>Place Order</PlaceOrder>
      </CheckoutDiv>
    )
  }
}
const mapStateToProps = state => ({
  cart: state.cart
})
const mapDispatchToProps = {
  startCartLoad,
  startSendingOrder
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutBurgers)
const CheckoutDiv = styled.div`
  display: flex;
  justify-content: center
  flex-direction: column
  background-color: yellow
`
const ObjectDiv = styled.div`
  display: flex;
  justify-content: center
  flex-direction: column
  background-color: yellow
`
const PlaceOrder = styled.button`
  display: flex
  justify-content: center
  width: 100px
`
