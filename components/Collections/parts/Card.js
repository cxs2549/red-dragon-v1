import Link from "next/link"
import React from "react"

const Card = ({ product }) => {
  return (
    <div>
      <Link href={`/products/${product.handle}`}>
        <img src={product.images[0].src} className="rounded-t-xl cursor-pointer bg-white" alt="" />
      </Link>
      <div className="pt-8 pb-12 bg-slate-800 rounded-b-2xl">
        <h3 className="text-sm font-medium my-4 -translate-y-0.5 text-center h-[50px]">
          {product.title}
        </h3>
        <h3 className="text-sm text-center">${product.variants[0].price}</h3>
      </div>
    </div>
  )
}

export default Card
