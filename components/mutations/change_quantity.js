import {gql} from "@apollo/client";

const Change_quantity = gql`
mutation updateItemQuantities($key: ID!, $quantity: Int!) {
  updateItemQuantities(input: {items: {key: $key, quantity: $quantity}}) {
    updated {
      key
      quantity
    }
  }
}
`
module.exports = Change_quantity