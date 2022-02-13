import {gql} from "@apollo/client";
export const CLEAR_CART_MUTATION = gql`
mutation CLEAR_CART_MUTATION {
  emptyCart(input: {}) {
    clientMutationId
  }
}

`