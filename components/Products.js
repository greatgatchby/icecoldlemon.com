import {Card} from "react-bootstrap";
import React from "react";
import Link from "next/link";
import AddToCartBtn from "./cart/AddToCartBtn";
import Image from 'next/image'

const Products = ( props ) => {
    const { product } = props;
    return (
        <div className={'p-1'}>
            <Card className={'p-0'}>
                <Card.Header className={'bg-icl-primary'}>
                    <Card.Title className="text-center">{product.name}</Card.Title>
                </Card.Header>
                <Link href={`/single-product?id="${product.id}"`}>
                    <a>
                        {product.image ? (<Image height={800} width={800} alt={product.description} className={'card-img-top'} src={`${product.image.sourceUrl}`} />): (<Image height={800} width={800} alt={product.description} className={'card-img-top'} src={`https://via.placeholder.com/800x800?text='${product.name}'`} />)}
                    </a>
                </Link>
                <Card.Body>
                    <h6 className="card-subtitle mb-3">{ product.price }</h6>
                    <AddToCartBtn props={props}/>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Products;
