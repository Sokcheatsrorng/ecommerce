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
	<>
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
	</>
  )
}

