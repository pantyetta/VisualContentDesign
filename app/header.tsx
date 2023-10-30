'use client'

import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return(
        <header className="sticky w-full border-b-[1px] drop-shadow-sm top-0 bg-white z-10">
            <div className="flex justify-between items-center max-w-3xl px-6 mx-auto h-16">
                <Link href="/">
                    <Image src="/logo.svg"  alt="logo" width={120} height={120}/>
                </Link>
                <div className="flex flex-row gap-4">
                    <Link href="/About" className="p-2 hover:bg-gray-100 rounded-md">
                        About
                    </Link>
                    <Link href="/location"  className="p-2 hover:bg-gray-100 rounded-md">
                        Location
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;