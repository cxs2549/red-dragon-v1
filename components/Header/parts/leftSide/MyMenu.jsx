import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import { Fade as Hamburger } from "hamburger-react"

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
      <div className=" flex items-center justify-center relative">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 max-w-fit"
        >
          <Hamburger rounded toggled={isOpen} size={24} />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden min-w-[260px] bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Search
                  </Dialog.Title>
                  <div className="mt-2"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
