import { Products } from "@/utilis/mock"; 
import Productcard from "@/components/ui/Productcard";
import { StaticImageData } from "next/image";


const AllProducts = ()=>{
  return (
    
    <div className="flex flex-wrap justify-evenly mt-16 gap-6 py-15">
    
      { Products.map((product)=>(
        <Productcard 
        key={product.id} 
        title = {product.name} 
        Price = {product.price} 
        img = {product.image as StaticImageData}
        catagory={product.catagory}
        id = {product.id}
        />
      ))}
    </div>    
  )}
  export default AllProducts;