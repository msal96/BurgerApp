import React from 'react'
import { connect } from 'react-redux'

import Burger from '../components/Burger'
import IngredientsSection from '../components/IngredientsSection'
import Modal from '../components/UI/Modal'
import OrderSummary from '../components/OrderSummary'

const BurgerBuilderPage = props => {
  return (
    <div>
      {props.showModal ? (
        <Modal>
          <OrderSummary ingredients={props.ingredients} />
        </Modal>
      ) : null}
      <Burger />
      <IngredientsSection />
    </div>
  )
}

const mapStateToProps = state => ({
  ingredients: state.ingredients.normal,
  showModal: state.showModal
})

export default connect(
  mapStateToProps,
  null
)(BurgerBuilderPage)
