import React from 'react'
import Card from './Card'

const CardList = ({products}) => {
  return (
    <div className=' rounded-xl  grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((p, i) => (
            <Card key={i} product={p} />
        ))}
    </div>
  )
}

export default CardList