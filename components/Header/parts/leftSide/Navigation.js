import Link from "next/link"
import React from "react"

const links = [
  { name: "All", handle: "all" },
  { name: "The Heavies", handle: "the-heavies" },
  { name: "Portable", handle: "portable" },
  { name: "Desktop", handle: "desktop" },
  { name: "Induction Heaters", handle: "induction-heaters" },
  { name: "Torch Powered", handle: "torch-powered" },
]

const Navigation = () => {
  return (
    <ul className="hidden lg:flex justify-evenly ml-24 w-full flex-1">
      <li>
        <Link href={`/`}>
          <a>Home</a>
        </Link>
      </li>
      {links.map((link, i) => (
        <li key={i}>
          <Link href={`/collections/${link.handle}`}>
            <a className="whitespace-nowrap">{link.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Navigation
