import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addExtraIngredient } from '../actions/actions'

const Extra = (props) => {
  const { extra, addExtraIngredient } = props
  return (
    <Wrapper>
      <div>Extra ingredients</div>
      {
        extra.map((item, index) => <button key={index} onClick={() => addExtraIngredient(item)}>{item.type}</button>)
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex
  justify-content: center
  flex-direction: column
`

const mapStateToProps = state => ({
  extra: state.ingredients.extra
})

const mapDispatchToProps = {
  addExtraIngredient
}

export default connect(mapStateToProps, mapDispatchToProps)(Extra)

