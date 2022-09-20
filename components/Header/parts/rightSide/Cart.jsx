/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import { Fragment, useContext, useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { GrFormClose } from "react-icons/gr"
import { ShopContext } from "../../../../context/shopContext"

export default function MyModal() {
  const { checkout, updateItem, removeItem } = useContext(ShopContext)
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      <div className=" flex items-center justify-center relative ">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md  px-4 py-2 text-sm font-medium  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative hoverRed"
        >
          <div className="absolute bg-red-500 text-white  w-5 h-5 rounded-full top-0 right-0.5">
            {checkout.lineItems?.length}
          </div>
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
                <Dialog.Panel className="w-full  transform overflow-hidden min-w-[320px] tablet:min-w-[340px] bg-white dark:bg-slate-800 p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    onClick={closeModal}
                    className="text-lg font-medium leading-6 text-gray-900 flex items-end cursor-pointer"
                  >
                    {checkout.lineItems?.length === 0 && (
                      <p className="text-sm dark:text-white">
                        Your cart is empty.
                      </p>
                    )}
                    <GrFormClose
                      className="ml-auto hoverRed dark:text-white relative right-1.5 tablet:-right-3"
                      size={33}
                    />
                  </Dialog.Title>

                  {checkout.lineItems && checkout.lineItems.length === 0 ? (
                    <div className="mt-8">
                      <Link href="/collections/all">
                        <button className="w-full font-bold text-lg bg-black text-white py-3 rounded">
                          Continue browsing
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-8 mt-8">
                      {checkout.lineItems?.map((item, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-[1.5fr,2fr] gap-4"
                        >
                          <div className="max-w-[100px]">
                            <img
                              src={item.variant.image.src}
                              className="rounded-2xl object-contain bg-white"
                              alt={item.title}
                            />
                          </div>
                          <div className="">
                            <p className="text-sm">{item.title}</p>
                            <p>${item.variant.price * item.quantity}</p>
                            <div className="border my-2 rounded-lg divide-x max-w-fit overflow-hidden flex">
                              <button
                                className=" h-9 w-12 "
                                onClick={() =>
                                  updateItem(checkout.id, {
                                    id: item.id,
                                    quantity: item.quantity - 1,
                                    variantId: item.variant.id,
                                  })
                                }
                              >
                                -
                              </button>
                              <span className="h-9 w-12 grid place-items-center">
                                {item.quantity}
                              </span>
                              <button
                                className=" h-9 w-12 "
                                onClick={() =>
                                  updateItem(checkout.id, {
                                    id: item.id,
                                    quantity: item.quantity + 1,
                                    variantId: item.variant.id,
                                  })
                                }
                              >
                                +
                              </button>
                            </div>
                            {item.quantity > 1 && (
                              <span className="pt-1">Remove</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-12">
                    <div className="flex justify-between items-center">
                      <p>Subtotal</p>
                      <p>${checkout.paymentDue}</p>
                    </div>
                    <Link href={checkout.webUrl?.toString()}><button className="block w-full bg-red-500 text-white font-bold py-3 rounded mt-8 text-lg">Checkout</button></Link>
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
