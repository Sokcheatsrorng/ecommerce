import React from 'react'
import Image from 'next/image'

const ComponentHeroSection = () => {
    return (
        <div>
            <section className="">
                <div className=" px-4 mx-auto max-w-screen-xl ">
                    <div className="bg-green-100 flex flex-row-reverse rounded-lg p-8 md:p-12 mb-8">
                        <div className='w-1/3'>
                            <Image width={250} height={200} src={'/assets/numKhmer.png'} alt='Num-Khmer' />
                        </div>
                        <div className=' grid-cols-2 justify-center  items-center'>
                            <h1 className="w-10/12 text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">នំ និងបង្អែមខ្មែរប្រចាំហាងមានថ្មីៗជារៀងរាល់ថ្ងៃ ​រសជាតិដើម រូបរាងថ្មី </h1>
                            <figure className="w-10/12 mt-10 mx-auto " >

                                <blockquote>
                                    <p className=" text-2xl italic font-medium text-orange-950 opacity-1"> Bring the taste of Khmer desserts to the world.</p>
                                    <p className=" ml-3 text-2xl italic font-mediumtext-orange-950 opacity-1">នាំយក​រសជាតិដើមរបស់ខ្មែរទៅកាន់ពិភពលោក </p>
                                </blockquote>
                                
                            </figure>

                        </div>


                    </div>

                    <div className="w-9/12 mx-auto grid md:grid-cols-2 gap-12 mb-10">
                        <div className="  bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg  ">
                           
                            <Image width={500} height={500} src={'/assets/location.jpg'} alt='Location of Our Shop'/>
                            <h2 className="m-4 text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Localtion</h2>
                            <p className="mx-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">17252 Rose Apple Rd, Krong Siem Reap., Siem Reap, Cambodia</p>
                            
                        </div>
                        <div className="  dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg ">
                        <Image width={100} height={100} className='h-80 w-full' src={'/assets/supported.jpg'} alt='Supporter customer'/>
                            <h2 className="m-4 text-gray-900 dark:text-white text-3xl font-extrabold mb-2">អរគុណសម្រាប់ការគាំទ្ររបស់អ្នកទាំងអស់គ្នា</h2>
                            <p className="mx-3 text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">អតិថិជនអាចកម្មង់នំខ្មែរជាច្រើនប្រភេទបានសម្រាប់រៀបចំកម្មវិធី និងពិធីនានា ជាពិសេសជូនដល់មនុស្សជាទីស្រលាញ់ </p>
                            
                        </div>
                    </div>
                </div>
            </section >

        </div >
    )
}

export default ComponentHeroSection


