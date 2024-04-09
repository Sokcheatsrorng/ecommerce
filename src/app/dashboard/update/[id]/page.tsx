import { baseApi } from '@/constants/baseApi'
import UpdateProductForm from '@/components/forms/UpdateForm'
import React from 'react'
type Props = {
	params:{
		id:number
	},
	
}
const getData=async(props:Props)=>
{
  const data=await fetch(`${baseApi}products/${props.params.id}/`)
  const respone= await data.json()
  console.log(respone)
  return respone;
}
export default async function page(props:any) {
  const data= await getData(props.id)
  console.log(data)
  return (
	<div>
      <UpdateProductForm 
        category={data.category.name}
        price={data.price}
        desc={data.desc}
        name={data.name}
        quantity={data.quantity}
        image={data.image}
        id={data.id}
        seller={data.seller}
      />
	</div>
  )
}

// import { baseApi } from '@/constants/baseApi';
// import UpdateProductForm from '@/components/forms/UpdateForm';
// import React, { useEffect, useState } from 'react';
// import { Products } from '@/types/products';
// type Props = {
//   params: {
//     id: number;
//   };
// };

// const Page: React.FC<Props> = (props) => {
//   const [productData, setProductData] = useState<Products | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${baseApi}products/${props.params.id}/`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data: Products = await response.json();
//         setProductData(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, [props.params.id]);

//   if (!productData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <UpdateProductForm
//         category={productData.category.name}
//         price={productData.price}
//         desc={productData.desc}
//         name={productData.name}
//         quantity={productData.quantity}
//         image={productData.image}
//         id={productData.id}
//         seller={productData.seller}
//       />
//     </div>
//   );
// };

// export default Page;
