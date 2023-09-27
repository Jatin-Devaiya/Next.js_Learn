import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ErrorPage = () => {
  const router = useRouter();
  const gotohome = () => {
    router.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      gotohome();
    }, [3000]);
  }, []);

  return (
    <div>
      {/* <Link href={"/"}>
        <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 m-10">
          Go To Home Page
        </button>
      </Link> */}
      <br />
      <br />
      <button
        className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 m-10"
        onClick={gotohome}
      >
        go home page
      </button>
    </div>
  );
};

export default ErrorPage;
