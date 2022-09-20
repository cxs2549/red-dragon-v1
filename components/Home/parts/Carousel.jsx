import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import Image from "next/image"
import Link from "next/link"

const MyCarousel = ({ items }) => {
  return (
    <Carousel
      // swipeable={false}
      // animationHandler="fade"
      showIndicators={false}
      autoPlay={true}
      showStatus={false}
      infiniteLoop={true}
      showThumbs={false}
      dynamicHeight={false}
      className="max-w-[500px] px-5 xl:px-0 max-h-[500px] mt-10 mx-auto rounded-2xl overflow-hidden cursor-pointer"
    >
      {items.map((item, i) => (
        <div key={i} className="rounded-2xl overflow-hidden z-20">
          <Link href={`/products/${item.handle}`}>
            <a href="">
              <Image
                className="rounded-2xl bg-white"
                width={500}
                height={500}
                src={item.images[0].src}
                alt=""
               
              />
            </a>
          </Link>
        </div>
      ))}
    </Carousel>
  )
}

export default MyCarousel
