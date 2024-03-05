import  { StaticImageData} from "next/image";

export type Product = {
    
    id:number
    name:string
    price: number
    catagory: string
    tagline: string
    image: string | StaticImageData
    
};