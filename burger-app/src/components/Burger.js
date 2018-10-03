import React from 'react'
import styled from 'styled-components'
import {
  BreadBottom,
  BreadTop,
  Meat,
  Cheese,
  Salad,
  Bacon
} from '../styling/ingredientsStyling'

const Burger = () => {
  return (
    <BurgerWrapper>
      <BreadTop />
      <Meat />
      <Cheese />
      <Salad />
      <Bacon />
      <BreadBottom />
    </BurgerWrapper>
  )
}
const BurgerWrapper = styled.div`
  height: 100%
`
export default Burger
