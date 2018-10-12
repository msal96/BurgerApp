import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {startCartLoad, startSendingOrder, resetIngredients} from '../actions/actions'

class CheckoutBurgers extends Component {
  componentDidMount () {
    const { startCartLoad, resetIngredients } = this.props
    startCartLoad()
    resetIngredients()
  }

  render () {
    const { burgers, totalPrice } = this.props.cart
    return (
      <Wrapper>
        <OrderInfo>{`Your order costs: ${totalPrice}`}</OrderInfo>
        <OrderInfo>{burgers.map((item, index) => 
          <Item key={index}>
            {Object.keys(item).map((props, index) => <div key={index}>{`${props}:${item[props]}`}</div>)}
          </Item>)}
        </OrderInfo>

        <PlaceOrderButton onClick={() => this.props.startSendingOrder()}>Place Order</PlaceOrderButton>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const OrderInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 1em;
`
const Item = styled.div`
  margin: 1em;
`
const PlaceOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  cursor: pointer;
  border-radius: 0.5em;
  padding: 0.25em;
  &:hover {
    background-color: #6FB748;
    color: white;
  }
  &:focus {
    outline: none;
  }
`

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = {
  startCartLoad,
  startSendingOrder,
  resetIngredients
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutBurgers)
