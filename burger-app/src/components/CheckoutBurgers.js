import React from 'react'
import { connect } from 'react-redux'

const CheckoutBurgers = props => {
  return (
    <div>
      {props.basket.map(item => typeof (item) !== 'number'
        ? <div>
          <p>{item.type}: {item.amount}</p>
        </div>
        : <p>Total price: {item}</p>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  basket: state.basket
})
export default connect(mapStateToProps, null)(CheckoutBurgers)
