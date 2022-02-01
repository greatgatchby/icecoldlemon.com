import React from "react";
import {Row, Col, Carousel, Container} from "react-bootstrap";
import logo from '../assets/logo.svg'
import Image from 'next/image'
import '../styles/Home.module.css'
export default function Home() {
  // noinspection DuplicatedCode
    return (
      <>
      <main>
          <div className="position-relative overflow-hidden p-0 mb-md-3 text-center bg-icl">
              <div className="col-md-5 p-lg-5 mx-auto my-5 bg-header">
                  <Image className={'shadow-lg'} src={logo}  alt={'logo: jn in square at 90 degrees'}/>
                  <h1 className="text-light">Creps, Clothes, Vibes</h1>
                  <form>
                      <Row>
                          <Col xs={9}>
                              <div className={'w-100 my-2'}>
                                  <div className="form-floating ps-1">
                                      <input className="form-control" id="floatingSearch" placeholder="Search" />
                                      <label htmlFor="floatingSearch">Search</label>
                                  </div>
                              </div>
                          </Col>
                          <Col>
                              <div className={'d-flex align-items-center h-100'}>
                                  <div className={'col ms-1'}>
                                      <button className="w-100 btn btn-lg btn-primary" type="submit">Search</button>
                                  </div>
                              </div>
                          </Col>
                      </Row>
                  </form>
              </div>
          </div>
          <Container className={'d-flex flex-column'}>
              <Row lg={3} className={'d-flex justify-content-center ms-sm-1'}>
                  <Col className={'p-0 m-0'}>
                      <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                          <div className="my-3 py-3">
                              <Row>
                                  <Col>
                                      <Carousel className={'bg-dark'} interval={null}>
                                          <Carousel.Item>
                                              <div className={'card m-2'}>
                                                  <Image width={592} height={592} src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98cb225d-c678-4224-ab6a-4b020466c8c7/air-jordan-1-low-se-shoes-11m0zP.png'} alt={'sneaker name'}/>
                                                  <div className={'text-dark'}>
                                                      <h4>Shoe Name</h4>
                                                      <h3>£35</h3>
                                                  </div>
                                                  <a href={'#'} className={'stretched-link'}/>
                                              </div>
                                          </Carousel.Item>
                                          <Carousel.Item>
                                              <div className={'card m-2'}>
                                                  <Image width={592} height={592} src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98cb225d-c678-4224-ab6a-4b020466c8c7/air-jordan-1-low-se-shoes-11m0zP.png'} alt={'sneaker name'}/>
                                                  <div className={'text-dark'}>
                                                      <h4>Shoe Name</h4>
                                                      <h3>£35</h3>
                                                  </div>
                                                  <a href={'#'} className={'stretched-link'}/>
                                              </div>
                                          </Carousel.Item>
                                          <Carousel.Item>
                                              <div className={'card m-2'}>
                                                  <Image width={592} height={592} src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98cb225d-c678-4224-ab6a-4b020466c8c7/air-jordan-1-low-se-shoes-11m0zP.png'} alt={'sneaker name'}/>
                                                  <div className={'text-dark'}>
                                                      <h4>Shoe Name</h4>
                                                      <h3>£35</h3>
                                                  </div>
                                                  <a href={'#'} className={'stretched-link'} />
                                              </div>
                                          </Carousel.Item>
                                      </Carousel>
                                      <a className={'td-none text-white'} href={'/category?category=clothing'}>
                                          <h2 className="display-5">Accessories</h2>
                                      </a>
                                  </Col>
                              </Row>
                          </div>
                      </div>
                  </Col>
                  <Col className={'p-0 m-0'}>
                      <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                          <div className="my-3 py-3">
                              <Row>
                                  <Col>
                                      <Carousel className={'bg-dark'} interval={null}>
                                          <Carousel.Item>
                                              <div className={'card m-2'}>
                                                  <Image width={592} height={592} src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98cb225d-c678-4224-ab6a-4b020466c8c7/air-jordan-1-low-se-shoes-11m0zP.png'} alt={'sneaker name'}/>
                                                  <div className={'text-dark'}>
                                                      <h4>Shoe Name</h4>
                                                      <h3>£35</h3>
                                                  </div>
                                                  <a href={'#'} className={'stretched-link'}/>
                                              </div>
                                          </Carousel.Item>
                                          <Carousel.Item>
                                              <div className={'card m-2'}>
                                                  <Image width={592} height={592} src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98cb225d-c678-4224-ab6a-4b020466c8c7/air-jordan-1-low-se-shoes-11m0zP.png'} alt={'sneaker name'}/>
                                                  <div className={'text-dark'}>
                                                      <h4>Shoe Name</h4>
                                                      <h3>£35</h3>
                                                  </div>
                                                  <a href={'#'} className={'stretched-link'}/>
                                              </div>
                                          </Carousel.Item>
                                          <Carousel.Item>
                                              <div className={'card m-2'}>
                                                  <Image width={592} height={592} src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98cb225d-c678-4224-ab6a-4b020466c8c7/air-jordan-1-low-se-shoes-11m0zP.png'} alt={'sneaker name'}/>
                                                  <div className={'text-dark'}>
                                                      <h4>Shoe Name</h4>
                                                      <h3>£35</h3>
                                                  </div>
                                                  <a href={'#'} className={'stretched-link'} />
                                              </div>
                                          </Carousel.Item>
                                      </Carousel>
                                      <a className={'td-none text-white'} href={'/category?category=clothing'}>
                                          <h2 className="display-5">Clothing</h2>
                                      </a>
                                  </Col>
                              </Row>
                          </div>
                      </div>
                  </Col>
                  <Col className={'p-0 m-0'}>
                      <div className="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                          <div className="my-3 py-3">
                              <Row>
                                  <Col>
                                      <Carousel className={'bg-dark'} interval={null}>
                                          <Carousel.Item>
                                              <div className={'card m-2'}>
                                                  <Image width={592} height={592} src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98cb225d-c678-4224-ab6a-4b020466c8c7/air-jordan-1-low-se-shoes-11m0zP.png'} alt={'sneaker name'}/>
                                                  <div className={'text-dark'}>
                                                      <h4>Shoe Name</h4>
                                                      <h3>£35</h3>
                                                  </div>
                                                  <a href={'#'} className={'stretched-link'}/>
                                              </div>
                                          </Carousel.Item>
                                          <Carousel.Item>
                                              <div className={'card m-2'}>
                                                  <Image width={592} height={592} src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98cb225d-c678-4224-ab6a-4b020466c8c7/air-jordan-1-low-se-shoes-11m0zP.png'} alt={'sneaker name'}/>
                                                  <div className={'text-dark'}>
                                                      <h4>Shoe Name</h4>
                                                      <h3>£35</h3>
                                                  </div>
                                                  <a href={'#'} className={'stretched-link'}/>
                                              </div>
                                          </Carousel.Item>
                                          <Carousel.Item>
                                              <div className={'card m-2'}>
                                                  <Image width={592} height={592} src={'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/98cb225d-c678-4224-ab6a-4b020466c8c7/air-jordan-1-low-se-shoes-11m0zP.png'} alt={'sneaker name'}/>
                                                  <div className={'text-dark'}>
                                                      <h4>Shoe Name</h4>
                                                      <h3>£35</h3>
                                                  </div>
                                                  <a href={'#'} className={'stretched-link'} />
                                              </div>
                                          </Carousel.Item>
                                      </Carousel>
                                      <a className={'td-none text-white'} href={'/category?category=footwear'}>
                                          <h2 className="display-5">Footwear</h2>
                                      </a>
                                  </Col>
                              </Row>
                          </div>
                      </div>
                  </Col>
              </Row>
                  <div className={'row d-flex justify-content-center py-3 px-0'}>
                      <div className={'col-4'}>
                          <a href={'/all-products'}><button className="w-100 btn btn-lg btn-primary" type="submit">Shop All</button></a>
                      </div>
                  </div>
          </Container>
      </main>
      </>
  )
}
