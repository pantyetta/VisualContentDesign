"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from '@/public/logo.png'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";


const Header = () => {
  return (
    <header className="sticky w-full border-b-[1px] drop-shadow-sm top-0 bg-white z-10">
      <div className="flex justify-between items-center px-6 mx-auto h-16 container">
        <Link href="/" className="flex flex-row items-center">
          <Image className="w-16 h-16" src={Logo} alt="logo" />
          <p>イタリアン CIT</p>
        </Link>
        <div className="flex flex-row">
          <NavigationMenu>
            <NavigationMenuList >
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/point" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Point</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
