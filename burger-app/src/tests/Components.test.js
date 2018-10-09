import React from 'react'
import configureStore from 'redux-mock-store'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Burger from '../components/Burger'
import Modal from '../components/UI/Modal'
import BurgerBuilderPage from '../pages/BurgerBuilderPage'
import CheckoutBurgers from '../components/CheckoutBurgers'
import { Salad, Meat, Cheese, Bacon } from '../styling/ingredientsStyling'

configure({ adapter: new Adapter() })

// create any initial state needed
const initialState = {
  chosenIngredients: ['salad', 'bacon', 'meat', 'bacon'],
  showModal: false,
  basket: [{
    ingredients: [
      { type: 'salad', amount: 1, price: 1 },
      { type: 'meat', amount: 2, price: 4 },
    ], 
    price: 9
  }]
}
// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore()
let wrapper
let store

describe('<Burger /> testing', () => {
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<Burger store={store} />).dive()
  })

  it('should not render any component if array of chosen ingredients doesnt contain it', () => {
    expect(wrapper.find(Cheese)).toHaveLength(0)
  })

  it('should render a component if it is in array', () => {
    expect(wrapper.find(Salad)).toHaveLength(1)
    expect(wrapper.find(Meat)).toHaveLength(1)
  })

  it('should render a component multiple times', () => {
    expect(wrapper.find(Bacon)).toHaveLength(2)
  })
})

describe('<BurgerBuilderPage /> testing', () => {
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<BurgerBuilderPage store={store} />).dive()
  })

  it('should not show modal if state is false', () => {
    expect(wrapper.find(Modal)).toHaveLength(0)
  })

  it('should toggle modal if state is true', () => {
    wrapper.setProps({showModal: true})
    expect(wrapper.find(Modal)).toHaveLength(1)
  })
})

describe('<CheckoutBurgers /> testing', () => {
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<CheckoutBurgers store={store} />).dive()
  })

  it('should contain a paragraph <p>meat: 2</p>', () => {
    expect(wrapper.contains(<p>meat: 2</p>)).toEqual(true)
  })

  it('should not contain a paragraph <p>cheese: 3</p>', () => {
    expect(wrapper.contains(<p>cheese: 3</p>)).toEqual(false)
  })
})