import Head from "next/head";
import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>AboutPage</title>
      </Head>

      <div>about</div>
      <Image
        src={"/jd_consultancy_logo.webp"}
        width={300}
        height="100"
        alt="jd"
      ></Image>
      <Image
        src={
          "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        }
        width={300}
        height={300}
        alt="camaramen"
      ></Image>
      <Image
        src={
          "https://images.pexels.com/photos/18394309/pexels-photo-18394309/free-photo-of-portrait-of-a-young-boy-with-a-shadowy-silhouette-against-the-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        width={300}
        height={300}
        alt="bhailu"
      ></Image>
    </>
  );
};

export default about;
