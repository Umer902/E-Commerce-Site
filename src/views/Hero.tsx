import { Badge } from "@/components/layout/badge"
import { Button } from "@/components/layout/button"
import Heroimage from "/public/Heroimage.webp"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-6 py-6">
        {/*left Div */}
        <div className="flex-1 mt-14">
        <Badge className=" bg-blue-100 text-lg text-blue-600 ml-10 rounded-lg  ">
          Sale 70% </Badge>
        <h1 className="scroll-m-20 font-extrabold tracking-tight lg:text-6xl mt-6 ml-8">
        An Industrial Take on Streetwear
        </h1>
        <p className="leading-9 [&:not(:first-child)]:mt-10 ml-8">
        Anyone can beat you but no one can beat your 
        outfit as long as you wear Dine outfits.
    </p>
    <Button className=" bg-black ml-8 h-12 gap-5 rounded-none mt-10">Strat Shopping</Button>
        </div>
        {/*Right Div */}
        <div className="flex bg-orange-50 rounded-full">
        <Image src= {Heroimage} alt="Hero"/>

        </div>
        </section>
  )
}

export default Hero