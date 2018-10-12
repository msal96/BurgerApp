import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { showSuccessMessage } from '../actions/actions'

const SuccessOrder = (props) => {
  return(
    <div>
      {props.successOrder ? <Wrapper>
        <div>Your order was sucessfully placed!</div>
        <ButtonOK onClick={() => props.showSuccessMessage(false)}>OK</ButtonOK>
      </Wrapper> : null}
    </div>
  )
}

const Wrapper = styled.div`
  width: 30%;
  margin: 0.5em auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ButtonOK = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  &:hover {
    background-color: #6FB748;
    color: white;
  }
  &:focus {
    outline: none;
  }
`

const mapStateToProps = state => ({
  successOrder: state.successOrderMessage
})

const mapDispatchToProps = {
  showSuccessMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessOrder)