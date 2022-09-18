import Image from "next/image"
import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2   flex justify-center">
      <Link href={`/`}>
        <div className="shadow-xl dark:shadow-none brightness-90 h-[60px] rounded-full overflow-hidden w-[60px]">
          <Image width={60} height={60} src="/logo.png" alt="" />
        </div>
      </Link>
    </div>
  )
}

export default Logo
