import React from "react";
import products from "../data/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import hytera from "../Hytera.pdf"

const ProductsPage = () => {
  return (
    <>
    <Navbar />
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Explore Our Comprehensive Range of Communication Solutions</h2>
          <div class="md:w-3/5 md:pl-6">
            <p class="leading-relaxed text-base">Welcome to the Boi Squared Engineering Products Page! Here, you'll find a diverse array of cutting-edge communication solutions designed to meet the evolving needs of businesses, organizations, and communities. From two-way radio systems to advanced IP and GSM technologies, we have everything you need to stay connected, informed, and empowered.</p>
          </div>
          <div class="container px-5 py-24 mx-auto">
    
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://hytera-europe.com/assets/img/logo-og.png" />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">Our Partners</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Hytera</h1>
                  <p class="leading-relaxed">Hytera Solutions bring all the innovation, modern design and products that are feature rich to enable more every day. </p>
                  <div>
                    <a href={hytera}>
                      <button>Download Brochure</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://assets.mobileworldlive.com/wp-content/uploads/2021/03/16115715/ZTE_logo.png" style={{height: "220px", width: "420px"}}/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">Our Partners</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">ZTE</h1>
                  <p class="leading-relaxed">With innovative technologies and product solutions, ZTE serves global telecom operators, government and enterprise customers, and consumers.</p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrcne1hWml6kO7qt76pwpgr6-2jYiBS55rG-SX6qIqQ&s" style={{height: "220px", width: "450px"}}/>
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">Our Partners</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">ICOM</h1>
                  <p class="leading-relaxed">Icom has a strong reputation for providing communications products of unsurpassed quality and reliability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageURL} // Using imageURL from product data
                  alt={product.name} // Using name as alt text
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#"> {/* You can add the href here */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductsPage;
