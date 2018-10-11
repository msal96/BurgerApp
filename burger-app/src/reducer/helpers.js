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

export const filterByAmount = arr => {
  let result = []
  arr.map(item => (item.amount > 0 ? result.push(item) : null))
  return result
}

export const modifyItemAmount = (items, type, value) => {
  return items.map(
    item =>
      item.type === type ? { ...item, amount: item.amount + value } : item
  )
}


export const updateChosenIngredients = (arr, ingredient, action) => {
  let result = [...arr]
  action === "add"
    ? result.push(ingredient)
    : result.splice(result.lastIndexOf(ingredient), 1)
  return result
}
