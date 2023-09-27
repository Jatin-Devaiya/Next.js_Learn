import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link href="/" className="p-8">
          Home
        </Link>
        <Link href="/about" className="p-8">
          About
        </Link>
        <Link href="/contact" className="p-8">
          <button>Contact</button>
        </Link>
        <Link href="/product" className="p-8">
          Product
        </Link>
        {/* <Link href="/productsss" className="p-8">
          Productsss
        </Link> */}
      </ul>
    </div>
  );
};

export default Navbar;
