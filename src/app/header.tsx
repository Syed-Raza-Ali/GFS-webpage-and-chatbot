import { ShoppingCart, Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="flex    bg-white h-24 w-full justify-between  items-center px-6 ">
      <div className="flex ">

        <div className="md:flex h-12 justify-center items-center w-12 mx-4 hidden">
          <Link className="text-4xl font-bold  cursor-pointer" href="/">
            <Image
              src="https://i.ibb.co/10LWsRP/Logo-removebg-preview.png"
              alt='logo'
              width={700}
              height={500}
              className='w-96 h-52'
            />
          </Link>
        </div>

      </div>
      <nav className="hidden md:block px-10">
        <ul className="flex md:gap-x-10 font-semibold ">
          <li>
            <Link href="/" className="cursor-pointer ">Home</Link>
          </li>
          <li>
            <Link href="https://gfsbuilders.com.pk/services/" className="cursor-pointer">Services</Link>
          </li>
          <li>
            <Link href="https://gfsbuilders.com.pk/projects/" className="cursor-pointer">Projects</Link>
          </li>
          <li>
            <Link href="https://gfsbuilders.com.pk/gallery/" className="cursor-pointer" >Media</Link>
          </li>
          <li>
            <Link href="https://gfsbuilders.com.pk/our-company/" className="cursor-pointer ">About us</Link>
          </li>
          <li>
            <Link href="https://gfsbuilders.com.pk/blog/" className="cursor-pointer">Blogs</Link>
          </li>
          <li>
            <Link href="/Kids" className="cursor-pointer">Contacts </Link>
          </li>

        </ul>
      </nav>
      <div className="md:flex h-12 justify-center items-center w-28 mx-4 font-bold bg-red-500 hidden">
        <Link href="https://gfsbuilders.com.pk/" className="cursor-pointer">Get a Quote</Link>

      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="flex gap-2 "> <ShoppingCart />  <Link className=" font-bold  cursor-pointer" href="/"> GFS Builders </Link> </SheetTitle>

            <nav className="hidden md:block px-10">
              <ul className="flex md:gap-x-10 font-semibold ">
                <li>
                  <Link href="/" className="cursor-pointer ">Home</Link>
                </li>
                <li>
                  <Link href="https://gfsbuilders.com.pk/services/" className="cursor-pointer">Services</Link>
                </li>
                <li>
                  <Link href="https://gfsbuilders.com.pk/projects/" className="cursor-pointer">Projects</Link>
                </li>
                <li>
                  <Link href="https://gfsbuilders.com.pk/gallery/" className="cursor-pointer" >Media</Link>
                </li>
                <li>
                  <Link href="https://gfsbuilders.com.pk/our-company/" className="cursor-pointer ">About us</Link>
                </li>
                <li>
                  <Link href="https://gfsbuilders.com.pk/blog/" className="cursor-pointer">Blogs</Link>
                </li>
                <li>
                  <Link href="/Kids" className="cursor-pointer">Contacts </Link>
                </li>

              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}