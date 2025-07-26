"use client"

import React, { Fragment, useState } from "react"
import { useWindowSize } from "@/hooks/WindowHooks"
import Link from "next/link"

const menus = [
    { name: "About us", href: "/" },
    { name: "Contact", href: "/" }
]

interface MobileNavProps {
    open: boolean
    setOpen: (_value: boolean) => void
}

const MobileNav = ({ open, setOpen }: MobileNavProps) => {
    return (
        <Fragment>
            <div
                className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${open ? "visible opacity-75" : "invisible opacity-0"}`}
                onClick={() => setOpen(false)}
            />

            <div
                className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className='flex justify-end p-4'>
                    <button onClick={() => setOpen(false)} className='text-3xl text-white focus:outline-none'>
                        &times;
                    </button>
                </div>
                <nav className='flex flex-col items-center space-y-6 pt-10 text-2xl font-semibold text-[#A9A9A9]'>
                    {menus.map((menu, index) => (
                        <Link
                            href={menu.href}
                            className='transition-colors duration-300 hover:text-white'
                            onClick={() => setOpen(false)}
                            key={menu.name.replace(" ", "_").concat("_", index.toString())}
                        >
                            {menu.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </Fragment>
    )
}

const Navigation = () => {
    const { isTab } = useWindowSize()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className='relative z-50 pb-0 lg:pt-9 2xl:pt-11'>
            <div className='container mx-auto flex items-start justify-between px-4 py-4 lg:py-0'>
                <div className='flex flex-grow justify-center lg:justify-start'>
                    <img src='/logo.svg' alt='fame-tonic' className='h-[50px] w-auto lg:h-[74px] 2xl:h-[90px]' />
                </div>
                {!isTab && (
                    <div className='-mt-1 hidden items-center justify-end gap-10 text-lg font-semibold text-[#A9A9A9] lg:flex'>
                        {menus.map((menu, index) => (
                            <Link
                                href={menu.href}
                                className='transition-colors duration-300 hover:text-white'
                                key={menu.name.replace(" ", "_").concat("_", index.toString())}
                            >
                                {menu.name}
                            </Link>
                        ))}
                    </div>
                )}
                {isTab && (
                    <button onClick={() => setIsMenuOpen(true)} className='p-2' aria-label='Toggle menu'>
                        <img src='/nav.svg' alt='menu-icon' />
                    </button>
                )}
            </div>

            {isTab && <MobileNav open={isMenuOpen} setOpen={(value) => setIsMenuOpen(value)} />}
        </header>
    )
}

export default Navigation
