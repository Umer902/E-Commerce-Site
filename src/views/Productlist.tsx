import Productcard from "@/components/ui/Productcard";
import { StaticImageData } from "next/image"
import {Products} from "@/utilis/mock"

const productChecks = Products.slice(0,3);
function Productlist() {
  
  return (
    
    <div className="flex justify-between mt-16 py-10">
    
      { productChecks.map((product)=>(
        <Productcard 
          key={product.id}
          title={product.name}
          Price={product.price}
          img={product.image as StaticImageData} 
          catagory={product.catagory}
          id = {product.id}        />
      ))}
    </div>    
  );
}

export default Productlist;
