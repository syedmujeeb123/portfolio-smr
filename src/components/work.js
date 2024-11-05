import React from "react";
import Bookmark from "../assets/bookmark_smr.webp";
import ProductList from "../assets/product_list_cart.webp";
import ecommerce from "../assets/ecommerce.webp";
import Furniro from "../assets/furniro.png";
import Tipcalculator from "../assets/tip-calculator.webp";
import Travel from "../assets/travel.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className="sm:pt-0 pt-12 md:h-screen text-gray-300 bg-[#0a192f] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full  h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#ccd6f6]">
            Work
          </p>
          <p className="py-6 ">Check out some of my recent work</p>
        </div>

        {/*    Container       */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*        Grid Item 1        */}
          <div
            style={{ backgroundImage: `url(${Bookmark})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                JS + TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://bookmark-manager-smr.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/syedmujeeb123/Bookmark-Manager">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*        Grid Item  2      */}
          <div
            style={{ backgroundImage: `url(${ProductList})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                JS + TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://product-list-cart-js.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/syedmujeeb123/product_list_with_cart">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*        Grid Item    3    */}
          <div
            style={{ backgroundImage: `url(${ecommerce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                JS + TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://ecommerce-product-page-js-smr.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/syedmujeeb123/ecommerce-product-page">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*        Grid Item   4     */}
          <div
            style={{ backgroundImage: `url(${Furniro})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS + TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://furniro-dusky.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/syedmujeeb123/Furniro">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*        Grid Item    5    */}
          <div
            style={{ backgroundImage: `url(${Tipcalculator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS + TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://tip-calculator-js-smr.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/syedmujeeb123/Tip_Calculator_App">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*        Grid Item   6      */}
          <div
            style={{ backgroundImage: `url(${Travel})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}

            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ReactJS
              </span>
              <div className="pt-8 text-center">
                <a href="https://travel-list-react-smr.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/syedmujeeb123/travel-list">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
