import React from 'react'
import configureStore from 'redux-mock-store'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Burger from '../components/Burger'
import { Salad, Meat, Cheese, Bacon } from '../styling/ingredientsStyling'
configure({ adapter: new Adapter() })

// create any initial state needed
const initialState = {
  chosenIngredients: ['salad', 'bacon', 'meat', 'bacon']
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

