import Image from "next/image"
import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <div className="absolute  lg:translate-x-0 lg:left-5 cursor-pointer lg:-translate-y-1 left-1/2 -translate-x-1/2">
      <Link href={`/`}>
        <div className="dark:shadow-none brightness-90 h-[60px] rounded-full overflow-hidden w-[60px]">
          <Image width={60} height={60} src="/logo.png" alt="" />
        </div>
      </Link>
    </div>
  )
}

export default Logo
