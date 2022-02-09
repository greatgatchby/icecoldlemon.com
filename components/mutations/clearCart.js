import {gql} from "@apollo/client";
const CLEAR_CART = gql`
mutation CLEAR_CART {
  emptyCart(input: {clearPersistentCart: true})
}
`