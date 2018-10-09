// import CONSTANTS from '../constants/constants'

// export const sendOrderToDynamo = order =>
//   new Promise((resolve, reject) => {
//     AWS.config.region = 'eu-central-1'
//     AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//       IdentityPoolId: CONSTANTS.IDENTITY_POOL_ID
//     })

//     const lambda = new AWS.Lambda()
//     var params = {
//       FunctionName: 'MyThinslices_editUserInfo',
//       Payload: JSON.stringify(order)
//     }
//     return lambda.invoke(params).promise().then(console.log)
//   })
// Here may be an axios.post()
