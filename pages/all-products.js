import {
    Container,
    Row,
    Dropdown,
    ButtonGroup,
    Col,
    Card
} from "react-bootstrap";
import Products from "../components/Products";
import React from "react";
import client from "../components/ApolloClient";
import {gql} from "@apollo/client";

const PRODUCTS_QUERY =gql`query MyQuery {
  products(first: 20) {
    edges {
      node {
          id
        name
        description(format: RAW)
        purchasable
        attributes {
          nodes {
            ... on GlobalProductAttribute {
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
}`

const ProductsPage = (props) => {
    const { products } = props
    return (
        <div>
                <Container fluid className={'p-5'}>

                    <Row>
                        <Col xs={6}>
                            <h1>All Products</h1>
                        </Col>
                        <Col className={'d-flex justify-content-end'}>
                                <div>
                                    <Dropdown as={ButtonGroup}>
                                        <div className={'btn border-dark'}>Sort By</div>

                                        <Dropdown.Toggle split variant="dark" id="dropdown-split-basic" />

                                        <Dropdown.Menu align={'end'} variant="dark">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} className={'d-none d-lg-block'}>
                            <Card>
                                Filters
                            </Card>
                        </Col>
                        <Col>
                            <Row  xs={1} md={2} lg={4}>
                                { products.length ? (
                                    products.map( product => <Products key={ product.node.id } product={ product.node } /> )
                                ) : 'ERR 404 Products not found'}
                            </Row>
                        </Col>
                    </Row>

                </Container>
        </div>
    )
}

ProductsPage.getInitialProps = async () => {
    const result = await client.query({query: PRODUCTS_QUERY});
    console.log(result.data.products.edges)
    return {
        products: result.data.products.edges
    }
}
export default ProductsPage
