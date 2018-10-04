import React from 'react'
import styled from 'styled-components'

const OrderSummary = (props) => {
    // const ingredientSummary = Object.keys(props.ingredients)
    //     .map(ingredientKey => 
    //     <li>
    //         <IngredientName>{ingredientKey}</IngredientName>: {props.ingredients[ingredientKey]}
    //     </li>
    // )

    return (
        <OrderSummaryWrapper>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                <li></li>
            </ul>
        </OrderSummaryWrapper>
    )
}

const OrderSummaryWrapper = styled.div`
`
const IngredientName = styled.span`
    text-transform: capitalize
`

export default OrderSummary