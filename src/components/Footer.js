import React from "react";

import logo from '../Boi_Squared_Logo.png'

const Footer = () => {
    return (
        <footer class="bg-white rounded-lg shadow dark:bg-white m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-black-500 sm:mb-0 dark:text-black-400">
                        <li>
                            <a href="/" class="hover:underline me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="/about" class="hover:underline me-4 md:me-6">About Us</a>
                        </li>
                        <li>
                            <a href="/products" class="hover:underline me-4 md:me-6">Products</a>
                        </li>
                        <li>
                            <a href="/contact" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-black-200 sm:mx-auto dark:border-black-700 lg:my-8" />
                <span class="block text-sm text-black-500 sm:text-center dark:text-black-400">© 2024 <a href="#" class="hover:underline">Boi Squared Engineering™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer