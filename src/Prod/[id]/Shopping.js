import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../../Card'
import { Link } from 'react-router-dom'

function Shopping() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => setProducts(res))
  }, [])
  console.log(products);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
          {products.map((product) =>
          <Link key={product.id} to={`${product.id}`}>
            <Card  src={product.image} title={product.title} price={product.price} />
          </Link>
            )}
        </div>
      </div>
    </div>
  )
}

export default Shopping
