import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'

function Basket() {
  let ids = localStorage.getItem('id').split(',')
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json())
    .then(res => setProducts(res.filter((e)=>{
      for (let i = 0; i < ids.length; i++) {
        if (e.id == ids[i]) {
          return setProducts
        }
      }
    })))
  }, [ids])
  function removeItem(id) {
    ids = ids.filter(item => item !== id.toString());
    localStorage.setItem('id', ids.join(','));
  }
  return (
    <div>
        <button className='w-24 border-2 border-solid border-black m-2'>Buy</button>
      {products.map((e)=><Card key={e.id} src={e.image} price={e.price} remove={<button className='bg-white' onClick={()=>removeItem(e.id)}>X</button>} />)}
    </div>
  )
}

export default Basket
