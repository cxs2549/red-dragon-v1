import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import Image from "next/image"

const MyCarousel = () => {
  return (
    <Carousel autoPlay={true} showStatus={false} infiniteLoop={true} showThumbs={false}>
      <div>
        <Image width={500} height={500} src="https://dummyimage.com/500x500.png" alt="" />
      </div>
      <div>
        <Image width={500} height={500} src="https://dummyimage.com/500x500.png" alt="" />
      </div>
      <div>
        <Image width={500} height={500} src="https://dummyimage.com/500x500.png" alt="" />
      </div>
      <div>
        <Image width={500} height={500} src="https://dummyimage.com/500x500.png" alt="" />
      </div>
    </Carousel>
  )
}

export default MyCarousel
