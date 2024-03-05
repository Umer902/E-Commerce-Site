
import AddtoCart from "@/views/AddtoCart";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";

function Productcard(props: {
  title: string, 
  Price:number, 
  img:StaticImageData
  catagory: string
  id: number
}) {
  return (
    <Link href={`/products/${props.id}`}>
    <div className="py-5">
      <Image src={props.img} alt="product"/>
      <h1 className="font-bold text-xl mt-6">{props.title}</h1>
      <p className="font-bold text-lg mt-2"> $  {props.Price} </p>
      {/* <p className="font-bold text-lg mt-2"> catagory:<span className='text-base font-normal capitalize'> {props.catagory} </span></p>  */}
      {/* <p className="font-bold text-lg mt-2"> id: {props.id} </p>  */}
    
    <AddtoCart/>
    
    </div>
    </Link>
  );
}

export default Productcard;

