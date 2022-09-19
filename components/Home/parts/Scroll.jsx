import Image from "next/image"
import React from "react"

const Popular = ({items}) => {
  return (
    <div className="py-4 max-w-7xl mx-auto ">
      <div>
        <div className="px-5 text-2xl font-semibold mb-3">{items[0].title}</div>
        <div className=" flex gap-3 px-5 overflow-x-scroll w-full pb-8">
          {items[0].products.map((item) => (
            <div
              key={item}
              className="min-w-[180px] flex flex-col items-center justify-between rounded-2xl bg-white pb-8"
            >
              <Image
                width={180}
                className="rounded-2xl"
                height={180}
                src={item.images[0].src}
                alt=""
              />
              <p className="mt-4 text-slate-700 text-[15px]">{item.title}</p>
              <p className="text-slate-600">${item.variants[0].price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Popular
