import React from "react"
import Link from "next/link"

const Set = ({ collection }) => (
  <div>
    <div className="grid grid-cols-3 rounded-xl overflow-hidden">
      <div className="col-span-2 w-full bg-white cursor-pointer">
        <Link href={`/products/${collection.products[1].handle}`}>
          <img
            src={collection.products[1].images[0].src}
            alt=""
            className="w-full"
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="bg-white">
          <Link href={`/products/${collection.products[0].handle}`}>
            <img src={collection.products[0].images[0].src} alt="" />
          </Link>
        </div>
        <div className="bg-white w-full h-full">
          {" "}
          <Link href={`/products/${collection.products[2].handle}`}>
            <img src={collection.products[2].images[0].src} alt="" />
          </Link>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-1 rounded-lg">
      <Link href={`/collections/${collection.handle}`}>
        <h3 className="text-2xl cursor-pointer font-bold whitespace-nowrap mt-2">
          {collection.title}
        </h3>
      </Link>
    </div>
  </div>
)

const Browse = ({ items }) => {
  const desktop = items.filter((item) => item.title === "Desktop")
  const torchPowered = items.filter((item) => item.title === "Torch Powered")
  const accessories = items.filter((item) => item.title === "Accessories")[0]
  return (
    <div className="mb-6 mt-4 px-5 max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold mb-4 ">Browse by category</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-3">
        <Set collection={torchPowered[0]} />
        <Set collection={desktop[0]} />
        <Set collection={accessories} />
      </div>
    </div>
  )
}

export default Browse
