import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Search from "./Search";

const navigation = {
  pages: [
    { name: "General", href: "/" },
    { name: "Politics", href: "/" },
    { name: "Buissness", href: "/" },
    { name: "Entertainment", href: "/" },
    { name: "Health", href: "/" },
    { name: "Science", href: "/" },
    { name: "Sports", href: "/" },
    { name: "Technology", href: "/" },
  ],
};

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white">
      <header className="relative">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <img className="h-8 w-auto" src="/logo.png" alt="" />
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="/"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                  >
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="/"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </a>
                </div>
                {/* Sidebar Transition in mobile veiw.  */}
                <Transition.Root show={open} as={Fragment}>
                  <Dialog
                    as="div"
                    className="relative z-40 lg:hidden"
                    onClose={setOpen}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="transition-opacity ease-linear duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity ease-linear duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                      <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                      >
                        <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                          <div className="flex px-4 pt-5 pb-2">
                            <button
                              type="button"
                              className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close menu</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>

                          {/* Sidebar Links */}
                          <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                            {navigation.pages.map((page) => (
                              <div key={page.name} className="flow-root">
                                <Link
                                  onClick={() => setOpen(false)}
                                  href={page.href}
                                  className="-m-2 block p-2 font-medium text-gray-900"
                                >
                                  {page.name}
                                </Link>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                            <div className="flow-root">
                              <a
                                href="/"
                                className="-m-2 block p-2 font-medium text-gray-900"
                              >
                                Sign in
                              </a>
                            </div>
                            <div className="flow-root">
                              <a
                                href="/"
                                className="-m-2 block p-2 font-medium text-gray-900"
                              >
                                Create account
                              </a>
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition.Root>
                <Search /> {/* Searchbar in homepage */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </header>
  );
}

export default Navbar;
