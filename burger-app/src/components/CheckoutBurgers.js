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
    const properties = Object.keys(burgers)
    console.log('prood', burgers)
    return (
      <CheckoutDiv>
        <ObjectDiv>{`Your Basket's Total: ${totalPrice}`}</ObjectDiv>
        <ObjectDiv>{burgers.map((item, index) => <Item key={index}>
          {Object.keys(item).map(props => <div>{`${props}:${item[props]}`}</div>)}
        </Item>)}</ObjectDiv>
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
  align-items: center
  
  flex-direction: column
`
const ObjectDiv = styled.div`
  display: flex;
  justify-content: center
  flex-direction: row
  margin: 1em
`
const Item = styled.div`
  margin: 1em
`
const PlaceOrder = styled.button`
  display: flex
  align-items: center
  justify-content: center
  width: 100px
  cursor: pointer
  border-radius: 0.5em
  padding: 0.25em
  &:hover {
    background-color: #6FB748
    color: white
  }
`
