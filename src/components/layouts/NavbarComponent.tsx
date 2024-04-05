"use client";
import React from "react";
import {Navbar,NavbarBrand, NavbarContent,NavbarItem,Button} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import menu from "./Menu";

export default function NavbarComponent() {
  const pathname = usePathname();
  // if (pathname.includes("/dashboard")) return null;
  // else
  if(pathname === "/login"|| pathname === "/signup") return null;  // mean if goto page login or signup don't show navbar
    return (
      <Navbar className="bg-green-300">
        <NavbarBrand>
          <Image width={60} className="mr-4 rounded-full" height={60} src={"/assets/pic.jpg"} alt={""} />
          <p className="font-bold text-inherit">MOCHI</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
         
          {
              menu.map((menu,index)=>(
                <NavbarItem key={index}>
            <Link
                
              color="foreground"
              href={menu.path}
              className={`${pathname === menu.path && "font-bold text-blue-800"}`}
            >
              {menu.title}
            </Link>
            </NavbarItem>
            
              ))
              } 
 
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
          <Button as={Link}  href="/login" variant="flat">
            Login</Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/dashboard" variant="flat">
              Dashboard
            </Button>
          </NavbarItem>
          {/* <NavbarItem className="justify-center ">
          <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </NavbarItem> */}
        </NavbarContent>
      </Navbar>
    );
}
