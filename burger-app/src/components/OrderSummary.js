import React from 'react'
import styled from 'styled-components'

const OrderSummary = (props) => {
    const ingredientSummary = props.ingredients
        .map(item => 
        <ListItem key={item.type}>
            {item.amount} <IngredientName>{item.type}</IngredientName>
        </ListItem>
    )

    return (
        <OrderSummaryWrapper>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul >
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </OrderSummaryWrapper>
    )
}

const OrderSummaryWrapper = styled.div`
    font-family: Kodchasan
`
const ListItem = styled.li`
    list-style: none
`
const IngredientName = styled.span`
    text-transform: capitalize
`

export default OrderSummary