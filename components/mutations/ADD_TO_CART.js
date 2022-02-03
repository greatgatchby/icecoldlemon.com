import {gql} from "@apollo/client";

const ADD_TO_CART = gql`mutation MyMutation($quantity: Int!, $productId: Int!) {
  addToCart(input: {productId: $productId, quantity: $quantity}) {
      clientMutationId
    cart {
      contents {
        nodes {
          product {
            node {
              name
            }
          }
          quantity
          subtotalTax
        }
        itemCount
        productCount
      }
      discountTax
      subtotal
      totalTax
    }
  }
}`

module.exports = ADD_TO_CART