import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import { Fragment, useState } from "react"
import { BiMenuAltLeft, BiSearch } from "react-icons/bi"
import { GrFormClose } from "react-icons/gr"

const links = [
  { name: "All", handle: "all" },
  { name: "The Heavies", handle: "the-heavies" },
  { name: "Portable", handle: "portable" },
  { name: "Desktop", handle: "desktop" },
  { name: "Induction Heaters", handle: "induction-heaters" },
  { name: "Torch Powered", handle: "torch-powered" },
]

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className=" flex lg:hidden items-center justify-center relative ">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hoverRed"
        >
          <BiMenuAltLeft size={26} />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 lg:hidden"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed top-0 h-screen left-0">
            <div className="flex min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0  -translate-x-full"
                enterTo="opacity-100  translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100  translate-x-0"
                leaveTo="opacity-0  -translate-x-full"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden min-w-[260px] bg-white dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all flex flex-col gap-8">
                  <Dialog.Title
                    as="button"
                    onClick={closeModal}
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white -translate-x-2 hoverRed focus:outline-none focus:ring-0"
                  >
                    <Link href={`/`}>
                      <a className="rounded-full absolute left-0 -top-5 flex justify-center">
                        <Image
                          alt="Red Dragon"
                          width={70}
                          height={70}
                          className="rounded-full"
                          src="/logo.png"
                        />
                      </a>
                    </Link>
                    <GrFormClose size={33} className="ml-auto translate-x-4" />
                  </Dialog.Title>
                  <div className="mt-8">
                    <ul className="flex flex-col gap-2">
                      {links.map((link) => (
                        <li key={link.handle}>
                          <Link href="/">
                            <a className="text-2xl font-medium">{link.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p>Sign in</p>
                  <form>
                    <label
                      for="default-search"
                      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                    >
                      Search
                    </label>
                    <div class="relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <BiSearch size={26} />
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        class="block p-4 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search our shop"
                        required=""
                      />
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
