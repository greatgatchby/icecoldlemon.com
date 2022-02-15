import React from 'react'
import  { Row, Col, Button, Navbar, Container, Nav} from 'react-bootstrap'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import CartIcon from "./cart/CartIcon";
import NavLink from "next/link";

const Navigation = () => {
    return(
        <>
            <Navbar expand="lg" className={'fixed-top navbar-dark bg-nav overlay'}>
                <Row className={'logo text-center'}>
                        <NavLink href={'/'}><a><Image className={'shadow-lg logo'} src={logo}  alt={'logo: jn in square at 90 degrees'}/></a></NavLink>
                </Row>
                <Container fluid>
                    <Row className={'w-100'}>
                        <Col>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        </Col>
                        <Col className={'d-lg-none d-flex justify-content-end p-0 m-0'}>
                            <a href={'https://www.fiverr.com/share/7WQXv1'}><Button className={'btn btn-primary btn-header px-5 me-2'}>Login</Button></a>
                            <CartIcon />
                        </Col>
                        <Navbar.Collapse id="justify-content-start basic-navbar-nav w-100">
                        <Nav className="me-auto w-100">
                            <NavLink href="/"><a className="nav-link">Home</a></NavLink>
                            <NavLink href="/category?category=clothing"><a className="nav-link">Clothing</a></NavLink>
                            <NavLink href="/category?category=footwear"><a className="nav-link">Footwear</a></NavLink>
                            <NavLink href="/category?category=accessories"><a className="nav-link">Accessories</a></NavLink>
                            <NavLink href="/category?category=sneaker%20care"><a className="nav-link">Sneaker Care</a></NavLink>
                            <NavLink href="/category?category=gifts"><a className="nav-link">Gifts</a></NavLink>
                            <NavLink href="/post?id=someid"><a className="nav-link">About us</a></NavLink>
                        </Nav>
                            <div className={'d-none d-lg-block'}>
                                <a href={'https://www.fiverr.com/share/7WQXv1'}><Button className={'btn btn-primary btn-header px-5 me-2'}>Login</Button></a>
                            </div>
                        <div className={'d-none d-lg-block'}>
                            <CartIcon/>
                        </div>
                    </Navbar.Collapse>
                    </Row>
                </Container>
            </Navbar>
        </>
    )
}
export default Navigation
