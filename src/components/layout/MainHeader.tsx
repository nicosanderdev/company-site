import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { CustomDarkThemeToggle } from "../ui/CustomDarkThemeToggle";

export default function MainHeader() {
  return (
    <>
    <div className="grid grid-cols-12 w-full dark:bg-gray-800 bg-white px-4 md:px-0">
      <Navbar fluid rounded className="col-span-12 md:col-span-8 md:col-start-3">
        <NavbarBrand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
        </NavbarBrand>
        <CustomDarkThemeToggle />
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">
            About
          </NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
    </>
  )
}