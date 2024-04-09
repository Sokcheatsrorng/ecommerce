
import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Products } from "@/types/products";
import { useState,useEffect  } from "react";
import { baseApi } from "@/constants/baseApi";


async function ProductCardComponent({name, category, seller, desc, image, price}:Products)  {
  // const data = await fetchData()
return (
    <>
    {/* <div className=" w-11/12 gap-6 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "> */}
      {/* {data.map((item: Products) => ( */}
        <Card shadow="sm" >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="md"
              width="100%"
              alt={name}
              className="w-full mx-auto object-cover h-72 "
              src={image}

            />
            <div className=" m-2 font-medium text-2xl">{name}</div >
          </CardBody>
          <CardFooter>
            <div className="w-full flex items-center justify-between">
              <div className="text-xl">$ {price}</div>
              <div className="">
                <Button  className="text-orange-950 bg-green-300  text-sm">
                  ដាក់កន្រ្តាក់
                </Button>
              </div>

            </div>
          </CardFooter>
        </Card>
      {/* ))} */}
    {/* </div> */}
    </>
  );
}
export default ProductCardComponent;