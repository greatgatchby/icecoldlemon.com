import {gql} from "@apollo/client";

export const GET_CART = gql`
query GET_CART {
  cart {
    contentsTax
    contentsTotal
    discountTax
    discountTotal
    displayPricesIncludeTax
    feeTax
    feeTotal
    isEmpty
    needsShippingAddress
    shippingTax
    shippingTotal
    subtotal
    subtotalTax
    total
    totalTax
   contents {
      itemCount
      edges {
        node {
          quantity
          subtotal
          subtotalTax
          tax
          total
          product {
            node {
              image {
                sourceUrl
              }
              ... on VariableProduct {
                id
                name
                price
              }
              ... on SimpleProduct {
                id
                name
                price
              }
              ... on GroupProduct {
                id
                name
                price
              }
            }
          }
        }
      }
    }
  }
}
`
