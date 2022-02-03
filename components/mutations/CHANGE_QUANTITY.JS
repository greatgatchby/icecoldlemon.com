import {gql} from "@apollo/client";

const CHANGE_QUANTITY = gql`
mutation updateItemQuantities($key: ID!, $quantity: Int!) {
  updateItemQuantities(input: {items: {key: $key, quantity: $quantity}}) {
    updated {
      key
      quantity
    }
  }
}
`
module.exports = CHANGE_QUANTITY