import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import {addExtraIngredient} from '../actions/actions'
const Extra = (props) => {
  const {addExtraIngredient} = props
  return (
    <MainDiv>
      <div>Extra ingredients</div>
      <button onClick={() => addExtraIngredient('banana', 1.5)}>Banana</button>
      <button onClick={() => addExtraIngredient('ketchup', 0.5)}>Ketchup</button>
      <button onClick={() => addExtraIngredient('apple', 0.75)}>Apple</button>
      <button onClick={() => addExtraIngredient('mushroom', 1.25)}>Mushroom</button>
      <button onClick={() => addExtraIngredient('onion', 0.75)}>Onion</button>
    </MainDiv>
  )
}
const actions = {
  addExtraIngredient
}
export default connect(null, actions)(Extra)
const MainDiv = styled.div`
  display: flex
  justify-content: center
  flex-direction: column
`
