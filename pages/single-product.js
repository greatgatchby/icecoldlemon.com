import {withRouter} from 'next/router'
import client from '../components/ApolloClient'
import { gql } from "@apollo/client";
import React from "react";
import {Card, Container, Row, Col} from 'react-bootstrap'
import AddToCartBtn from "../components/cart/AddToCartBtn";
import Image from 'next/image'
import storeInspo from '../assets/sneaker_store_inspo.jpg'

const Product = withRouter(props=> {
    // noinspection JSUnresolvedVariable
    let product = props.product
    console.warn(props)
    // noinspection JSUnresolvedVariable
    const createMarkup = () => {
        return { __html: props.product.product.description}
    }
    //TODO variable product pricing
    return (
        <>
                <div className={'single-product border-0 p-0 m-0'}>
                    <div className={'p-0 m-0 pt-5 bg-icy single-product-overlay'}>
                        <Row md={2} className={'d-flex justify-content-center align-items-center p-0 m-0'}>
                                {props.product.product.__typename !== "VariableProduct" ? (
                                    <>
                                            <Col md={4}  className={'p-5 card'}>
                                                <h4>{props.product.product.name}</h4>
                                                <div dangerouslySetInnerHTML={createMarkup()} />
                                                <Row>
                                                    <Col>
                                                        <AddToCartBtn props={product} />
                                                    </Col>
                                                    <Col>
                                                        <p><b>{props.product.product.price}</b></p>
                                                    </Col>
                                                </Row>
                                                {props.product.product.productCategories.nodes.map((category)=> category !==  null ? (
                                                    <p><a href={`/category?category=${category.name}`}>{category.name}</a></p>
                                                ): 'no category associated with item')}
                                            </Col>
                                    <Col md={4} className={'text-center'}>
                                        {props.product.product.image ? (<Image height={800} width={800} alt={props.product.product.description} src={props.product.product.image.sourceUrl} />) : 'not found'}
                                    </Col>
                                    </>
                                )  :props.product.product.__typename === 'GroupProduct' ? (
                                    <>
                                        <Col md={4}  className={'p-5 card'}>
                                        <h4>{props.product.product.name}</h4>
                                        {props.product.product.description}
                                        <Row>
                                            <Col>
                                                <AddToCartBtn props={product} />
                                            </Col>
                                            <Col>
                                                <p><b>{props.product.product.price}</b></p>
                                            </Col>
                                        </Row>
                                            {props.product.product.productCategories.nodes.map((category)=> category !==  null ? (
                                                <p><a href={`/category?category=${category.name}`}>{category.name}</a></p>
                                            ): 'no category associated with item')}
                                    </Col>
                                    <Col>
                                        {props.product.product.image ? (<Image height={800} width={800} alt={props.product.product.description} src={props.product.product.image.sourceUrl} />) : 'not found'}
                                    </Col>
                                    </>
                                ) : (
                                    <>
                                        <Col md={4}  className={'p-5 card'}>
                                        <h4>{props.product.product.name}</h4>
                                        {props.product.product.description}
                                            <Row>
                                                <Col>
                                                    <AddToCartBtn props={product} />
                                                </Col>

                                            </Row>
                                            <Col>
                                                <p><b>{props.product.product.price}</b></p>
                                            </Col>
                                            {props.product.product.productCategories.nodes.map((category)=> category !==  null ? (
                                                <p><a href={`/category?category=${category.name}`}>{category.name}</a></p>
                                            ): 'no category associated with item')}
                                    </Col>
                                    <Col>
                                    {props.product.product.image ? (<Image height={800} width={800} className={''} alt={props.product.product.description} src={props.product.product.image.sourceUrl} />) : (<Image height={800} width={800} alt={props.product.product.description} className={'card-img-top'} src={`https://via.placeholder.com/800x800?text='${props.product.product.name}'`} />)}
                                    </Col>
                                    </>
                                )}
                        </Row>
                    </div>
                </div>
        </>
    )
})

Product.getInitialProps = async function(context) {
    let { query: { id }} = context
    const PRODUCT_QUERY = gql`
query SingleProduct ($id: ID!){
        product(id: $id) {
    name
    description(format: RENDERED)
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
    purchasable
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
    `

    const result = await client.query(({
        query: PRODUCT_QUERY,
        variables: { id }
    }));

    return {
        product: result.data,
    }
}

export default Product
