import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  // console.log("data",data);

  //   const [data, setdata] = useState([])

  //   const Get_Data = ()=>{
  //     axios.get('https://fakestoreapi.com/products')
  //     .then(function (response) {
  //       // handle success
  //       console.log(response.data);
  //       setdata(response.data)

  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //   }
  // useEffect(()=>{
  //   Get_Data();
  // },[]);

  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>

      {/* <div style={{color:"skyblue"}}>Home page default </div>
      <style>
        {`
          h1 {
            color: red;
          }
          #ptag{
            color: green;
          }
        `}
      </style>
      <h1>Hello I Am Home Page</h1>
      <p id="ptag">hello i m P tag</p>
      <br />
      <br /> */}

      {data.slice(0, 5).map((fetchdata, index) => {
        return (
          <frameElement key={fetchdata.id}>
            <h1>{fetchdata.id}</h1>
            <Link href={`/blog/${fetchdata.id}`}>
              {" "}
              <h1>Title : {fetchdata.title}</h1>
            </Link>
            <p>category : {fetchdata.category}</p>
          </frameElement>
        );
      })}
    </div>
  );
};

export default index;
