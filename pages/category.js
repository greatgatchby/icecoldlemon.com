import {ButtonGroup, Card, Col, Container, Dropdown, Row} from "react-bootstrap";
import Products from "../components/Products";
import React from "react";
import client from "../components/ApolloClient";
import {gql} from "@apollo/client";
import {CATEGORY_QUERY} from "../components/queries/category";

const ProductsPage = (props) => {
    const { products } = props;
    return (
        <div>
            <Container fluid className={'p-5'}>

                <Row>
                    <Col xs={6}>
                        <h1>{products.length  ? products[0].node.productCategories.nodes[0].name: ''}</h1>
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
                <Row cols={2}>
                    <Col md={2} className={'d-none d-lg-block'}>
                        <Card>
                            <Card.Header>
                                <Card.Title>Filter</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <form>
                                    <h6>Brand</h6>
                                    <Row>
                                        <label><input type={'checkbox'} />  Nike</label>
                                    </Row>
                                    <Row>
                                        <label><input type={'checkbox'} />  Jordan</label>
                                    </Row>
                                    <Row>
                                        <label><input type={'checkbox'} />  Adidas</label>
                                    </Row>
                                    <h6>Size</h6>
                                    <Row>
                                        <label><input type={'checkbox'} />  3</label>
                                    </Row>
                                    <Row>
                                        <label><input type={'checkbox'} />  3.5</label>
                                    </Row>
                                    <Row>
                                        <label><input type={'checkbox'} />  4</label>
                                    </Row>
                                    <h6>Style</h6>
                                    <Row>
                                        <label><input type={'checkbox'} />  Low-top</label>
                                    </Row>
                                    <Row>
                                        <label><input type={'checkbox'} />  Mid</label>
                                    </Row>
                                    <Row>
                                        <label><input type={'checkbox'} />  High-top</label>
                                    </Row>
                                    <h6>Colour</h6>
                                    <Row>
                                        <label><input type={'checkbox'} />  Red</label>
                                    </Row>
                                    <Row>
                                        <label><input type={'checkbox'} />  Green</label>
                                    </Row>
                                    <Row>
                                        <label><input type={'checkbox'} />  Blue</label>
                                    </Row>
                                </form>
                            </Card.Body>
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

ProductsPage.getInitialProps = async (context) => {
    let{ query: {category}} = context

    const result = await client.query({
        query: CATEGORY_QUERY,
        variables: {category}
    });
    console.log(result.data.products.edges)
    return {
        products: result.data.products.edges,
    }
}
export default ProductsPage
