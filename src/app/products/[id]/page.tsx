import { Products } from "@/utilis/mock";
import Image from "next/image";
import AddtoCart from "@/views/AddtoCart";
import Quantity from "@/components/ui/Quantity";

const GetProductDetail=(id : number )=>{
return Products.filter((product)=>product.id== id)
};
const sizes = ["XS","S","M","L","XL"]
export default function Page({ params }: { params: { id: number } }) {
  const result= GetProductDetail(params.id);
  return <div className='flex justify-evenly py-8 mt-10'>

{
   result.map((product)=>(
        <div key = {product.id} className=" flex gap-6">
          <div>
        <Image src ={product.image} alt= {product.name}/>
           </div>
            
             <div> 
              <h1 className="text-2xl">{product.name}</h1>
              <h2 className="text-base font-semibold text-gray-400">{product.tagline}</h2>
            </div>
          <div> 
            <div>
            <h3 className="flex flex-col mt-6 font-semibold">SELECT SIZE</h3>
            <div className="gap-x-5"></div>
          {/*sizes*/}
            <div className=" flex items-center justify-between mt-3">
            {
  sizes.map((item)=>{
    return ( 
    <div  key={item} className=" flex h-8 w-8 justify-center items-center duration-300 border bg-gray-200 rounded-full
     mt-4 hover:shadow-xl">
      
     <span className=" flex text-[12px] font-bold border  text-gray-600 ">
      {item}
      </span>
   </div>
   
      );
  })}
    </div>
    </div>
    {/* Quantity */}
            <div className="flex items-center mt-16">
              <h3 className="text-[15px] font-semibold ">Quantity:</h3>
              <Quantity/>
              </div>
          <div className=" flex flex-row center gap-x-5 mt-12">
          {/* Add to Cart */}
          <AddtoCart/>
    
          <h3 className="text-2xl font-bold">${product.price.toFixed(2)}</h3>
      </div>
     </div>
     </div>
    ))}
  </div>
  };