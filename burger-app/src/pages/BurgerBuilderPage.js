import React from 'react'
import Burger from '../components/Burger'
import IngredientsSection from '../components/IngredientsSection'
import Modal from '../components/UI/Modal'
import OrderSummary from '../components/OrderSummary'

const BurgerBuilderPage = () => {
  return (
    <div>
      {/* <Modal>
        <OrderSummary />
      </Modal> */}
      <Burger />
      <IngredientsSection />
    </div>
  )
}

export default BurgerBuilderPage
