import logo from "/public/logo.webp"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

function Header() {
  return (
    <div className="flex justify-between items-center ml-16 py-6 px-8">
        <Link href = {"/"}>
        <Image src={logo} alt="logo" className="w-40"/>
        </Link>
        <ul className="flex gap-x-10">
            <li className="lg-x">
              <Link href= {"/category/Female"}>Female</Link>
              </li>
            <li>
              <Link href = {"/category/Male"}>Male</Link>
              </li>
            <li>
              <Link href ={"/category/Kids"}>Kids</Link>
                </li>
            <li>
              <Link href= {"/products"}>All Products</Link>
                </li>
        </ul>
        <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
          <ShoppingCart/>
        </div>
    </div>
  )
}

export default Header