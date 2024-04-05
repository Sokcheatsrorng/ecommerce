"use client"
import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Products } from "@/types/products";

async function getdata() {
  const data = await fetch("https://store.istad.co/api/products/",{
    cache:"no-store"
  })
  const res = await data.json()
  return res.results

}

export default async function ProductCard() {

  const product = await getdata()
  return (
    <>
    <div className=" w-11/12 gap-6 mx-auto mt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {product.map((item: Products) => (
        <Card shadow="sm" key={item.id} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="md"
              width="100%"
              alt={item.name}
              className="w-full mx-auto object-cover h-72 "
              src={item.image}

            />
            <div className=" m-2 font-medium text-2xl">{item.name}</div >
          </CardBody>
          <CardFooter>
            <div className="w-full flex items-center justify-between">
              <div className="text-xl">$ {item.price}</div>
              <div className="">
                <Button  className="text-orange-950 bg-green-300  text-sm">
                  ដាក់កន្រ្តាក់
                </Button>
              </div>

            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
    </>
  );
}
