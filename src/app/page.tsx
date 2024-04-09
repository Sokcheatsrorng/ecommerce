
import React from 'react'
import ProductCardComponent from '@/components/cards/ProductsCard'
import ComponentHeroSection from '@/components/layouts/HeroSection'
import Link from 'next/link'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { baseApi } from '@/constants/baseApi'
import { Products } from '@/types/products'
type ParamProps = {
  params: {
    id: number
  }
}
// async function fetchData(){
//   const data =await fetch(`${baseApi}products/`)
//   const res = await data.json()
//   return res.results
// }

// export async function generateMetadata({params} : ParamProps){
//   const id = params.id
//   // const product = await getDetail(id)
//   return {
//     title: product?.title,
//     describe: product.description,
//     openGraph: {
//       images: product.thumbnail,
//     },
//   }
// }
async function fetchProducts() {
  const products = await fetch(`${baseApi}products`, {
    cache: "no-store"
  });
  const rest = await products.json();
  return rest.results;

}

export default async function page() {
  //const users = await fetchUsers();
  const products = await fetchProducts();
  return (
    < >
      <ComponentHeroSection />
      <h2 className='text-center py-10 font-medium text-2xl border border-green-200 rounded-sm  '>លក់ដាច់ប្រចាំហាង</h2>
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


    </>
  )
}
