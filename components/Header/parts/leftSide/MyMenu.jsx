import { Dialog, Transition } from "@headlessui/react"
import Link from "next/link"
import { Fragment, useState } from "react"
import {BiMenuAltLeft} from 'react-icons/bi'
import {GrFormClose} from 'react-icons/gr'

const links = [
  {name: 'All', handle: 'all'},
  {name: 'The Heavies', handle: 'the-heavies'},
  {name: 'Portable', handle: 'portable'},
  {name: 'Desktop', handle: 'desktop'},
  {name: 'Induction Heaters', handle: 'induction-heaters'},
  {name: 'Torch Powered', handle: 'torch-powered'},
]

const links2 = [
  'Our journal', 'About us', 'Help/FAQ', 'Get in touch'
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
        <Dialog as="div" className="relative z-10 lg:hidden" onClose={closeModal}>
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
                    <GrFormClose size={33} />
                  </Dialog.Title>
                  <div className="">
                    <ul className="flex flex-col gap-2">
                      {links.map(link => (

                      <li key={link.handle}>
                        <Link href="/"><a className="text-2xl font-medium">{link.name}</a></Link>
                      </li>
                      ))}
                     
                    </ul>
                  </div>
                    <ul className="flex flex-col gap-2">
                      {links2.map(link => (
                        <li key={link.handle}>
                       <p>{link}</p>
                      </li>
                      ))}
                    </ul>
                    <p>Login</p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
