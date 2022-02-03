import {gql} from "@apollo/client";

export const CHANGE_QUANTITY = gql`
mutation updateItemQuantities($key: ID!, $quantity: Int!) {
  updateItemQuantities(input: {items: {key: $key, quantity: $quantity}}) {
    updated {
      key
      quantity
    }
  }
}
`