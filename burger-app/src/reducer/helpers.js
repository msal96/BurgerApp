export const formatIngredients = (normalObj, extraObj) => {
  let result = {
    normal: [],
    extra: []
  }

  for (let i in normalObj) {
    result.normal.push({ type: i, amount: 0, price: normalObj[i] })
  }

  for (let i in extraObj) {
    result.extra.push({ type: i, amount: 0, price: extraObj[i] })
  }

  return result
}

export const modifyItemAmount = (items, type, value) => {
  return items.map(
    item =>
      item.type === type ? { ...item, amount: item.amount + value } : item
  )
}
export const resetAmount = (normalIngs) => {
  return normalIngs.map(
    item =>
      item.amount !== 0 ? { ...item, amount: 0 } : item
  )
}
export const filterByAmount = obj => {
  for (let i in obj) {
    if (obj[i] === 0) {
      delete obj[i]
    }
  }
  return obj
}
export const updateChosenIngredients = (arr, ingredient, action) => {
  let result = [...arr]
  action === 'add'
    ? result.push(ingredient)
    : result.splice(result.lastIndexOf(ingredient), 1)
  return result
}
export const formatBurger = (basket) => {
  let {ingredients, price} = basket
  let obj = {
    burgerPrice: price
  }
  ingredients.forEach(item => {
    obj[item.type] = item.amount
  })
  return obj
}
export const formatCart = cart => {
  const {Products, TotalPrice} = cart
  let obj = {
    totalPrice: TotalPrice,
    burgers: []
  }
  for (let i in Products) {
    obj.burgers.push(Products[i])
  }
  return obj
}
