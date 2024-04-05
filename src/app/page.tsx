
import React from 'react'
import ProductCard from '@/components/cards/ProductsCard'
import Jumbo from '@/components/header/Jumbo'

function page () {
  return (
    <div >
      <Jumbo/>
      <h2 className='text-center py-10 font-medium text-2xl border border-green-200 rounded-sm  '>លក់ដាច់ប្រចាំហាង</h2>
      <div>
      <ProductCard/>
      </div>
    </div>
  )
}

export default page
