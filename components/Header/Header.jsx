import React from "react"
import Logo from "./parts/Logo"
import LeftSideLayout from "./parts/leftSide/LeftSideLayout"
import RightSideLayout from "./parts/rightSide/RightSideLayout"
import Link from "next/link"
import { useRouter } from "next/router"
import Cart from "./parts/rightSide/Cart"

const links2 = ["Our journal", "About us", "Help/FAQ", "Get in touch"]

const Header = () => {
  const router = useRouter()
  return (
    <header>
      <div className="max-w-7xl mx-auto p-5 xl:px-0 flex  justify-between items-center relative">
        <LeftSideLayout />
        <Logo />
        <RightSideLayout />
      </div>
     
    </header>
  )
}

export default Header
