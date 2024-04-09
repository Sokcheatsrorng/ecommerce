import { Metadata } from 'next';
import React from 'react'
import ProductTable from '@/components/tables/Producttable';

export const metadata: Metadata = {
  title: "Dashboard",
  description: "This is Dashboard page shop",
  keywords: ['shop', 'ecommerce', 'sell',"card"]
};

const page = () => {
  return (
    <div className='w-full justify-center flex'>
      <ProductTable/>
    </div>
  )
}

export default page
