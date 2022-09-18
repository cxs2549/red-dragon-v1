import React from "react"
import Logo from "./parts/Logo"
import LeftSideLayout from "./parts/leftSide/LeftSideLayout"
import RightSideLayout from "./parts/rightSide/RightSideLayout"

const Header = () => {
  return (
    <header className="shadow">
      <div className="max-w-7xl mx-auto p-5 xl:px-0 flex justify-between items-center">
        <LeftSideLayout />
        <Logo />
        <RightSideLayout />
      </div>
    </header>
  )
}

export default Header
