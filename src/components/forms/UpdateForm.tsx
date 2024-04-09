"use client";
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Image from 'next/image'
import { baseApi } from '@/constants/baseApi';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { ACCESS_TOKEN } from '@/constants/baseApi';
import  ProductsUpdate  from '@/types/TypeUpate';


const FILE_SIZE = 1024 * 1024 * 5; // mean can store 5MB only
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const validationSchema = Yup.object().shape({
  image: Yup.mixed()
    .test("fileSize", "File too large", (value: any ) => {
      if (!value) {
        return true;
      }
      return value.size <= FILE_SIZE;
    })
    .test("fileFormat", "Unsupported Format", (value: any) => {
      if (!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type);
    })
    .required("Required"),
});



const fieldStyle = "border border-gray-300 rounded-md";

const UpdateProductForm = (pro:ProductsUpdate) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Authorization",
     `Bearer ${ACCESS_TOKEN}`
  );
  myHeaders.append(
    "Cookie",
    "csrftoken=UAYed23r5rTjUCeXkEop4Gqm307LAmptTfutJUnTm9l6N2Yg8m6XaSoDNSZE1tUe; sessionid=h5lwc3eior26qlvkl8q8a43y6bxopu0q"
  );
  const handleSubmitToServer = async (values: any) => {
    
    try {
      // axios is used to make HTTP requests to the server like the fetchData
      const response = await axios.post(
        `${baseApi}file/product/`,
        values.image
      );
      return response.data.image;
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdateProduct = async (values: any, imageData: any) => {
        try {
          const imageUrl = await handleSubmitToServer(imageData);
          console.log("data: ", values);
          const postData = await fetch(`${baseApi}products/${pro.id}/`, {
            method: "PUT",
            headers: myHeaders,
            body: JSON.stringify({
              ...values,
              image: imageUrl,
            }),
          });
          console.log("post data: ", postData);
        } catch (error) {
          console.log(error);
        }

  };

  return (

    <div className="w-full pt-9" >
      <Formik
        onSubmit={(values: any, { setSubmitting, resetForm }) => {
          console.log(values);
          const formData = new FormData();
          formData.append("image", values.image);
          handleUpdateProduct(values, { image: formData });
          setSubmitting(false);
          resetForm();
          
        }}
        validationSchema={validationSchema}
        initialValues={{
          category: {
            name: pro.category.name
          },
          name: pro.name,
          desc: pro.desc,
          image: pro.image,
          price: pro.price,
          quantity: pro.quantity,
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="w-9/12 mx-auto flex m-[30px] flex-col gap-4" key={pro.id}>
            {/* name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Category : </label>
              <Field
                placeholder={pro.category}
                className={fieldStyle}
                name="category.name"
                type="text"
              />
              {/* <ErrorMessage name="email">
                {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
              </ErrorMessage> */}
            </div><div className="flex flex-col gap-2">
              <label htmlFor="name">Product Name: </label>
              <Field
                placeholder={pro.name}
                className={fieldStyle}
                name="name"
                type="text"
              />
              {/* <ErrorMessage name="email">
                {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
              </ErrorMessage> */}
            </div>
            {/* description */}
            <div className="flex flex-col gap-2">
              <label htmlFor="desc">Description: </label>
              <Field
                placeholder={pro.desc}
                className={fieldStyle}
                name="desc"
                type="text"
              />
              {/* <ErrorMessage name="email">
                {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
              </ErrorMessage> */}
            </div>
            {/* price */}
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Price: </label>
              <Field
                placeholder={pro.price}
                className={fieldStyle}
                name="price"
                type="number"
              />
              {/* <ErrorMessage name="email">
                {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
              </ErrorMessage> */}
            </div>
            {/* quantity */}
            <div className="flex flex-col gap-2">
              <label htmlFor="price">Quantity: </label>
              <Field
                placeholder={pro.quantity}
                className={fieldStyle}
                name="price"
                type="number"
              />
              {/* <ErrorMessage name="email">
                {(msg) => <p className="text-red-600 text-sm italic">{msg}</p>}
              </ErrorMessage> */}

              {/* Image  */}
              <div>
                <Field
                  name="image"
                  className={fieldStyle}
                  type="file"
                  title="Select a file"
                  setFieldValue={setFieldValue} // Set Formik value
                  component={CustomInput} // component prop used to render the custom input
                />
                <ErrorMessage name="image">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-green-600 text-white rounded-md"
                disabled={isSubmitting}
              >
                Edit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateProductForm;

// custom Input
function CustomInput({ field, form, setFieldValue, ...props }: any) {
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    undefined
  );
  const name = field.name;
  const onChange: any = (event: any) => {
    console.log("event:", event.currentTarget.files);
    const file = event.currentTarget.files[0];
    setFieldValue(name, file);
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <input
        type="file"
        onChange={onChange}
        {...props}
        className="border border-gray-300 rounded-md"
      />
      {previewImage && (
        <Image
          className="rounded-md"
          src={previewImage}
          alt="preview Image"
          width={100}
          height={100}
        />
      )}
    </div>
  );
}

