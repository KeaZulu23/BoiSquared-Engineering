import React from "react";
import products from "../data/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductsPage = () => {
  return (
    <>
    <Navbar />
    <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Explore Our Comprehensive Range of Communication Solutions</h2>
          <div class="md:w-3/5 md:pl-6">
            <p class="leading-relaxed text-base">Welcome to the Boi Squared Engineering Products Page! Here, you'll find a diverse array of cutting-edge communication solutions designed to meet the evolving needs of businesses, organizations, and communities. From two-way radio systems to advanced IP and GSM technologies, we have everything you need to stay connected, informed, and empowered.</p>
          </div>
        </div>
      </section>

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
