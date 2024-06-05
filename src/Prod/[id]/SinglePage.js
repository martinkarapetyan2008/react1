import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../../Card';

function SinglePage() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    let prodId = localStorage.getItem('id').split() || []
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then(res => res.json())
            .then(res => setProduct(res.filter((e)=>e.id==id)))
    }, [product])
 
    return (
        <>
        {product.map((e)=>
            <Card
            key={e.id}
            src={e.image}
            button={'To Basket'}
            price={e.price}
            onClick={() => {
                prodId.push(e.id)
                localStorage.setItem('id',prodId)
            }}/>
        )
    }
        </>
    );
}

export default SinglePage;
