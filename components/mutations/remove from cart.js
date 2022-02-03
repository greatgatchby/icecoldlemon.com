import {gql} from "@apollo/client";

export const REMOVE_FROM_CART = gql`
    mutation removeFromCart ($keys: [ID]!) {
  removeItemsFromCart(input: {keys: $keys}){
      clientMutationId
}
}`