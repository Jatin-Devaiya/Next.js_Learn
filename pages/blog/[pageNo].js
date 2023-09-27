import { useRouter } from "next/router";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  const paths = data.map((c_element) => {
    return {
      params: {
        pageNo: c_element.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const singleProduct = ({ data }) => {
  console.log("singleData", data);

  // const router = useRouter()
  // const pageNumber = router.query.pageNo
  return (
    // <div>pageNo :  {pageNumber} </div>
    <>
      <h1>
        {" "}
        <img src={data.image} alt="img" width={100} />
      </h1>
      <h1>id : {data.id}</h1>
      <h1>title : {data.title}</h1>
      <h1>description : {data.description}</h1>
    </>
  );
};

export default singleProduct;
