import { Suspense } from "react";
import LoadingComponent from "../loading";
import ProductCardComponent from "@/components/cards/ProductsCard";
import { Products } from "@/types/products";
import Link from "next/link";
import { Metadata } from "next";
import { baseApi } from "../../constants/baseApi";

async function fetchData() {
  const data = await fetch(`${baseApi}products/?page=1&page_size=100`);
  const response = await data.json();
  return response.results;
}

export const metadata: Metadata = {
  title: "Product",
  description: "This is Product page shop",
  keywords: ['shop', 'ecommerce', 'sell']
};

export default async function Home() {
  const products = await fetchData()

  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <Suspense fallback={<LoadingComponent />}>
        <div className=" w-11/12 gap-6 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {products.map((product: Products) => {
            return (
              <Link href={`/product/${product.id}`} key={product.id}>
                <ProductCardComponent
                  name={product.name}
                  seller={product.seller}
                  image={product.image}
                  desc={product.desc}
                  price={product.price}
                  category={product.category}
                  quantity={product.quantity} />
              </Link>
            );
          })}
        </div>
        </Suspense>
      </div>
    </>
  );
}