import { Dialog, Transition } from "@headlessui/react"
import Link from "next/link"
import { Fragment, useContext, useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import {GrFormClose} from 'react-icons/gr'
import {ShopContext} from '../../../../context/shopContext'

export default function MyModal() {
  const {checkout} = useContext(ShopContext)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  console.log(checkout)

  return (
    <>
      <div className=" flex items-center justify-center relative ">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md  px-4 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative hoverRed"
        >
          <div className="absolute bg-red-500 text-white  w-5 h-5 rounded-full top-0 right-0.5">0</div>
          <AiOutlineShoppingCart size={24} />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed top-0 h-screen right-0 ">
            <div className="flex min-h-full text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0  translate-x-full "
                enterTo="opacity-100  translate-x-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100  translate-x-0"
                leaveTo="opacity-0  translate-x-full "
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden min-w-[70vw] tablet:min-w-[340px] bg-white dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    onClick={closeModal}
                    className="text-lg font-medium leading-6 text-gray-900 flex items-end cursor-pointer"
                  >
                    <p className="text-sm dark:text-white">Your cart is empty.</p>
                    <GrFormClose className="ml-auto dark:text-white relative right-1.5 tablet:-right-3" size={33} />
                  </Dialog.Title>
                  <div className="mt-8">
                   <Link href="/collections/all"><button className="w-full font-bold text-lg bg-black text-white py-3 rounded">Continue browsing</button></Link>
                  </div>

                 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
