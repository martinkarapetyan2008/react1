import React from 'react'

function Card({src, title, price, onClick, button, remove}) {
  return (
    <>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={src}
                  className="h-full w-2 object-contain object-top lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="mt-1 text-sm text-gray-500">{title}</p>
                </div>
                <div>
                  <button onClick={onClick}>{button}</button>
                </div>
                {remove}
                <p className="text-sm font-medium text-gray-900">{price}$</p>
              </div>
              </>
  )
}

export default Card
