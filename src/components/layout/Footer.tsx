import logo from "/public/logo.webp"
import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <><div className=" justify-between gap-10 items-center ml-1 py-6 px-8">
      <Image src={logo} alt="logo" className="w-40" />
      <span className="flex mt-8 gap-2 py-3 w-80">
        Small, artisan label that offers a thoughtfully
        curated collection of high quality everyday essentials made.
      </span>
    </div>
    <div className=" flex justify-between ml-10 mt-8 items-center gap-6">
        Copyright @ 2023 Dine Market Sample
        <p className="font-bold">Design by : Omer khadim</p>
        <p className="font-bold">Code by :ABC ON GIT HUB</p>
      </div></>

    
  )
}

export default Footer;