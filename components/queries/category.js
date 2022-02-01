import {gql} from "@apollo/client";

export const CATEGORY_QUERY =gql`query Categories ($category: String){
  products(where: {category: $category}) {
    edges {
      node {
        id
        name
        description(format: RAW)
        purchasable
         productCategories {
          nodes {
            id
            name
          }
        }
        attributes {
          nodes {
            ... on GlobalProductAttribute {
              id
              name
              options
            }
                    ... on LocalProductAttribute {
          id
          name
          options
        }
          }
        }
        productCategories {
          nodes {
            name
            id
            slug
          }
        }
        image {
          sourceUrl
        }
        galleryImages {
          nodes {
            sourceUrl
          }
        }
        ... on SimpleProduct {
          price
          onSale
          regularPrice
          salePrice
          dateOnSaleFrom
          dateOnSaleTo
          id
          slug
          isRestricted
          purchasable
          length
          stockQuantity
          stockStatus
        }
        ... on VariableProduct {
          price
          regularPrice
          salePrice
          dateOnSaleFrom
          dateOnSaleTo
          catalogVisibility
          variations {
            nodes {
              id
              name
              onSale
              price(format: FORMATTED)
              regularPrice
              salePrice
              slug
              isRestricted
              purchasable
              catalogVisibility
              stockQuantity
              stockStatus
              taxClass
              taxStatus
              image {
                sourceUrl
              }
            }
          }
        }
        reviews {
          averageRating
          edges {
            node {
              isRestricted
              content(format: RAW)
            }
          }
        }
        featured
        ... on GroupProduct {
          id
          name
          price
          onSale
          dateOnSaleFrom
          dateOnSaleTo
          id
          slug
          isRestricted
          purchasable
          products {
            nodes {
              id
              name
              shippingClasses {
                nodes {
                  id
                  description
                }
              }
              ... on VariableProduct {
                price
                regularPrice
                salePrice
                dateOnSaleFrom
                dateOnSaleTo
                catalogVisibility
                variations {
                  nodes {
                    id
                    name
                    onSale
                    price(format: FORMATTED)
                    regularPrice
                    salePrice
                    slug
                    isRestricted
                    purchasable
                    catalogVisibility
                    stockQuantity
                    stockStatus
                    taxClass
                    taxStatus
                    image {
                      sourceUrl
                    }
                  }
                }
              }
              ... on SimpleProduct {
                price
                onSale
                regularPrice
                salePrice
                dateOnSaleFrom
                dateOnSaleTo
                id
                slug
                isRestricted
                purchasable
                length
                stockQuantity
                stockStatus
              }
            }
          }
        }
      }
    }
  }
}
`