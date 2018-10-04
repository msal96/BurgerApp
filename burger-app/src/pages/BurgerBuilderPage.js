import React from 'react'
import { connect } from 'react-redux'

import Burger from '../components/Burger'
import IngredientsSection from '../components/IngredientsSection'
import Modal from '../components/UI/Modal'
import OrderSummary from '../components/OrderSummary'

const BurgerBuilderPage = (props) => {
  return (
    <div>
      <Modal>
        <OrderSummary ingredients={props.ingredients}/>
      </Modal>
      <Burger />
      <IngredientsSection />
    </div>
  )
}

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
})
  
export default connect(mapStateToProps, null)(BurgerBuilderPage)