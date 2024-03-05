import Productcard from "@/components/ui/Productcard";
import { StaticImageData } from "next/image"
import { Products } from "@/utilis/mock";

const GetProductbyCategory=(category:string)=>{
return Products.filter((product)=>product.catagory===category)
};

export default function Page({ params }: { params: { slug: string } }) {
  const result= GetProductbyCategory(params.slug);
  return<div className='flex justify-evenly flex-wrap py-8 mt-10'>

{
  result.length>0 ? result.map((product)=>(
    <Productcard
    key={product.id} 
    title={product.name}
     Price={product.price} 
     img={product.image as StaticImageData}
     catagory={product.catagory}
     id = {product.id}     
     />
    )) : <p>No Products Found </p>
    }
  
  </div>
  
};