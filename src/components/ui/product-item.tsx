import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({product}: ProductItemProps) => {
    return ( 
        <Link href={`/product/${product.slug}`}>
            <div className="flex flex-col gap-4">
                <div className="relative aspect-square flex w-full items-center justify-center bg-accent rounded-lg ">
                    <Image 
                        src={product.imageUrls[0]} 
                        height={0} 
                        width={0} 
                        sizes="100vw"
                        className=" max-h-[70%} h-[170px] w-auto max-w-[80%] object-contain"
                        style={{
                            objectFit: 'contain',
                        }}
                        alt={product.name}
                    />     

                    {product.discountPercentage > 0 && (
                        <Badge className="absolute left-3 top-3 px-2 py-[2px]">
                            <ArrowDownIcon size={14}/>{product.discountPercentage}%   
                        </Badge>
                    )}   
                </div>

                <div className="flex flex-col gap-1">
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                        {product.name}
                    </p>

                    <div className="flex items-center gap-2">
                        {product.discountPercentage > 0 ? (
                            <>
                                <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                                    R$ {product.totalPrice.toFixed(2)}
                                </p>

                                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs opacity-75 line-through">
                                    R$ {Number(product.basePrice).toFixed(2)}
                                </p>
                            </>
                        ) : (
                            <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                                R$ {product.basePrice.toFixed(2)}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
}
 
export default ProductItem;