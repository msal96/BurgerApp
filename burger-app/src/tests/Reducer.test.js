import reducer from '../reducer/reducer'
import Constants from '../constants/constants'
describe('Reducer testing', () => {
  const initialState = {
    ingredients: [
      { type: 'salad', amount: 0, price: 1 },
      { type: 'meat', amount: 0, price: 4 },
      { type: 'cheese', amount: 0, price: 2 },
      { type: 'bacon', amount: 0, price: 3 }
    ],
    basket: [],
    chosenIngredients: [],
    currentPrice: 0,
    totalPrice: 0,
    showModal: false
  }

  it('should return initial state when state is undefined', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should add correctly an ingredient', () => {
    expect(reducer(initialState, {
      type: Constants.ADD_INGREDIENT,
      payload: {
        type: 'salad',
        amount: 1
      }
    })).toEqual({
      ingredients: [
        { type: 'salad', amount: 1, price: 1 },
        { type: 'meat', amount: 0, price: 4 },
        { type: 'cheese', amount: 0, price: 2 },
        { type: 'bacon', amount: 0, price: 3 }
      ],
      basket: [],
      chosenIngredients: [],
      currentPrice: 0,
      totalPrice: 0,
      showModal: false
    })
  })
  it('should should extract correctly an ingredient', () => {
    expect(reducer({
      ingredients: [
        { type: 'salad', amount: 2, price: 1 },
        { type: 'meat', amount: 0, price: 4 },
        { type: 'cheese', amount: 0, price: 2 },
        { type: 'bacon', amount: 0, price: 3 }
      ],
      basket: [],
      chosenIngredients: [],
      currentPrice: 0,
      totalPrice: 0,
      showModal: false
    }, {
      type: Constants.ADD_INGREDIENT,
      payload: {
        type: 'salad',
        amount: -1
      }
    })).toEqual({
      ingredients: [
        { type: 'salad', amount: 1, price: 1 },
        { type: 'meat', amount: 0, price: 4 },
        { type: 'cheese', amount: 0, price: 2 },
        { type: 'bacon', amount: 0, price: 3 }
      ],
      basket: [],
      chosenIngredients: [],
      currentPrice: 0,
      totalPrice: 0,
      showModal: false
    })
  })
  it('should update current price correctly', () => {
    expect(reducer({
      ingredients: [
        { type: 'salad', amount: 0, price: 1 },
        { type: 'meat', amount: 1, price: 4 },
        { type: 'cheese', amount: 0, price: 2 },
        { type: 'bacon', amount: 0, price: 3 }
      ],
      basket: [],
      chosenIngredients: [],
      currentPrice: 0,
      totalPrice: 0,
      showModal: false
    }, {
      type: 'UPDATE_CURRENT_PRICE',
      payload: {
        amount: 4
      }
    })).toEqual({
      ingredients: [
        { type: 'salad', amount: 0, price: 1 },
        { type: 'meat', amount: 1, price: 4 },
        { type: 'cheese', amount: 0, price: 2 },
        { type: 'bacon', amount: 0, price: 3 }
      ],
      basket: [],
      chosenIngredients: [],
      currentPrice: 4,
      totalPrice: 0,
      showModal: false
    })
  })

  it('should add a chosen ingredient correctly', () => {
    expect(reducer({
      ingredients: [
        { type: 'salad', amount: 0, price: 1 },
        { type: 'meat', amount: 1, price: 4 },
        { type: 'cheese', amount: 0, price: 2 },
        { type: 'bacon', amount: 0, price: 3 }
      ],
      basket: [],
      chosenIngredients: ['meat'],
      currentPrice: 6,
      totalPrice: 0,
      showModal: false
    }, {
      type: 'UPDATE_CHOSEN_INGREDIENTS',
      payload: {
        ingredient: 'cheese',
        action: 'add'
      }
    })).toEqual({
      ingredients: [
        { type: 'salad', amount: 0, price: 1 },
        { type: 'meat', amount: 1, price: 4 },
        { type: 'cheese', amount: 0, price: 2 },
        { type: 'bacon', amount: 0, price: 3 }
      ],
      basket: [],
      chosenIngredients: ['meat', 'cheese'],
      currentPrice: 6,
      totalPrice: 0,
      showModal: false
    })
  })
  it('should remove a chosen ingredient correctly', () => {
    expect(reducer({
      ingredients: [
        { type: 'salad', amount: 0, price: 1 },
        { type: 'meat', amount: 1, price: 4 },
        { type: 'cheese', amount: 0, price: 2 },
        { type: 'bacon', amount: 1, price: 3 }
      ],
      basket: [],
      chosenIngredients: ['meat', 'bacon'],
      currentPrice: 7,
      totalPrice: 0,
      showModal: false
    }, {
      type: 'UPDATE_CHOSEN_INGREDIENTS',
      payload: {
        ingredient: 'bacon',
        action: 'remove'
      }
    })).toEqual({
      ingredients: [
        { type: 'salad', amount: 0, price: 1 },
        { type: 'meat', amount: 1, price: 4 },
        { type: 'cheese', amount: 0, price: 2 },
        { type: 'bacon', amount: 1, price: 3 }
      ],
      basket: [],
      chosenIngredients: ['meat'],
      currentPrice: 7,
      totalPrice: 0,
      showModal: false
    })
  })
  it('should reset ingredients', () => {
    expect(reducer({
      ingredients: [
        { type: 'salad', amount: 2, price: 1 },
        { type: 'meat', amount: 1, price: 4 },
        { type: 'cheese', amount: 1, price: 2 },
        { type: 'bacon', amount: 0, price: 3 }
      ],
      basket: [],
      chosenIngredients: ['salad', 'meat', 'cheese', 'salad'],
      currentPrice: 8,
      totalPrice: 0,
      showModal: false
    }, {
      type: 'RESET_INGREDIENTS'
    })).toEqual({
      ingredients: [
        { type: 'salad', amount: 0, price: 1 },
        { type: 'meat', amount: 0, price: 4 },
        { type: 'cheese', amount: 0, price: 2 },
        { type: 'bacon', amount: 0, price: 3 }
      ],
      basket: [],
      chosenIngredients: [],
      currentPrice: 0,
      totalPrice: 0,
      showModal: false
    })
  })
  it('should add to basket ingredients and price of a burger correctly', () => {
    expect(reducer({
      ingredients: [
        { type: 'salad', amount: 2, price: 1 },
        { type: 'meat', amount: 1, price: 4 },
        { type: 'cheese', amount: 1, price: 2 },
        { type: 'bacon', amount: 0, price: 3 }
      ],
      basket: [],
      chosenIngredients: ['salad', 'meat', 'cheese', 'salad'],
      currentPrice: 8,
      totalPrice: 0,
      showModal: false
    }, {
      type: 'ADD_TO_BASKET'
    })).toEqual({
      ingredients: [
        { type: 'salad', amount: 2, price: 1 },
        { type: 'meat', amount: 1, price: 4 },
        { type: 'cheese', amount: 1, price: 2 },
        { type: 'bacon', amount: 0, price: 3 }
      ],
      basket: [
        {
          ingredients: [
            { type: 'salad', amount: 2, price: 1 },
            { type: 'meat', amount: 1, price: 4 },
            { type: 'cheese', amount: 1, price: 2 }
          ],
          price: 8
        }
      ],
      chosenIngredients: ['salad', 'meat', 'cheese', 'salad'],
      currentPrice: 8,
      totalPrice: 8,
      showModal: false
    })
  })
})
