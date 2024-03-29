import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhotoIcon,
  XMarkIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logos-software/logo-horizontal.png";
import LogoVert from "../../assets/image/logos-software/logo-vertical.png";
import ThemeSwitcher from "../../components/index/ThemeSwitcher";
const products = [
  {
    name: "Mobile Applications",
    href: "/mobileapps",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Websites",
    href: "/websites",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Prototype Designs",
    href: "/designs",
    icon: PhotoIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="z-50 absolute w-screen">
      <nav
        className="z-50 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-lightBG"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-lightBG"
          >
            Home
          </Link>
          <Popover className="relative ">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-lightBG">
              Projects
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400 dark:text-lightBG"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 dark:ring-lightBG/5 dark:shadow-darkBG dark:bg-darkBG dark:divide-y dark:divide-lightBG/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-darkLight"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-primary dark:group-hover:text-darkLight"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-gray-900 dark:text-lightBG "
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600 dark:text-lightBG">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 divide-x  divide-lightBG/5 bg-gray-50 dark:bg-darkBG">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 dark:text-lightBG  dark:hover:bg-darkLight"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400 dark:text-lightBG"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            to="/clients"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-lightBG"
          >
            Our Clients
          </Link>
          <Link
            to="/career"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-lightBG"
          >
            Careers
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-lightBG"
          >
            About
          </Link>
          <Link
            to="/faqs"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-lightBG"
          >
            FAQs
          </Link>
        </Popover.Group>
        <div className="hidden gap-12 lg:flex lg:flex-1 lg:justify-end">
          <ThemeSwitcher />

          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-lightBG"
          >
            Hire Us<span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 " />
        <Dialog.Panel className="z-[1000] fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-darkBG">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-12 w-auto" src={LogoVert} alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-lightBG"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-lightBG/5">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-darkLight dark:hover:bg-dark dark:hover:text-darkBG"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-darkLight dark:hover:bg-dark dark:hover:text-darkBG">
                        Projects
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Link
                            to={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-darkLight dark:hover:bg-dark dark:hover:text-darkBG"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/clients"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-darkLight dark:hover:bg-dark dark:hover:text-darkBG"
                >
                  Our Clients
                </Link>
                <Link
                  to="/career"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-darkLight dark:hover:bg-dark dark:hover:text-darkBG"
                >
                  Careers
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-darkLight dark:hover:bg-dark dark:hover:text-darkBG"
                >
                  About
                </Link>
                <Link
                  to="/faqs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-darkLight dark:hover:bg-dark dark:hover:text-darkBG"
                >
                  FAQs
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-darkLight dark:hover:bg-dark dark:hover:text-darkBG"
                >
                  Hire Us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
