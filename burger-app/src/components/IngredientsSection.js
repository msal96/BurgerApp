import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Extra from './Extra'
import Default from './Default'

import { 
  addIngredient, 
  updateCurrentPrice, 
  updateChosenIngredients, 
  toggleModal, 
  initialIngredientsLoad 
} from '../actions/actions'

class IngredientsSection extends Component {
  
  onClickMore = (type, amount) => {
    const { addIngredient, updateCurrentPrice, updateChosenIngredients } = this.props
    addIngredient(type, 1)
    updateCurrentPrice(amount)
    updateChosenIngredients(type, 'add')
  }

  onClickLess = (type, amount) => {
    const { addIngredient, updateCurrentPrice, updateChosenIngredients, ingredients } = this.props
    let result = ingredients.normal.map(item => item.type === type && item.amount>0)
    if(result.includes(true)) {
    addIngredient(type, -1)
    updateCurrentPrice(amount)
    updateChosenIngredients(type, 'remove')
    }
  }

  componentDidMount () {
    this.props.initialIngredientsLoad()
    toggleModal(true)
  }

  render() {
    return (
      <Wrapper>
        <SectionWrapper>
            <Extra />
        </SectionWrapper>

        <SectionWrapper>
          <Default onClickLess={this.onClickLess} onClickMore={this.onClickMore}/>
        </SectionWrapper>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: #c58d3c
  color: #280f02
  width: 100%
  padding: 1.5em 0
  display: flex
  align-items: center
  justify-content: center;
  font-family: Kodchasan
`
const SectionWrapper = styled.div`
  margin: 0.5em
  width: 50%
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
`

const mapStateToProps = (state) => ({
  ingredients: state.ingredients,
  currentPrice: state.currentPrice,
  showModal: state.showModal
})

const mapDispatchToProps = {
  addIngredient,
  updateCurrentPrice,
  updateChosenIngredients,
  toggleModal,
  initialIngredientsLoad
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsSection)
