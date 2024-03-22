import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA.js";

const HomePage = () => {
    return (
        <>
        <Navbar />
        <section class="bg-center bg-no-repeat bg-[url('https://images.inc.com/uploaded_files/image/1920x1080/getty_849653618_2000132520009280270_344567.jpg')] bg-gray-700 bg-blend-multiply">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome to Boi Squared Engineering - Your Trusted Telecommunication Partner</h1>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">At Boi Squared Engineering, we believe that communication is not just a tool; it's the lifeline that connects communities, businesses, and individuals. With a legacy spanning decades, we stand as the epitome of telecommunication excellence, committed to delivering innovative solutions that transcend boundaries and empower our clients to thrive in an interconnected world.</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900">
                        Get started
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>  
                </div>
            </div>
        </section>
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Who We Are</h1>
                <div class="h-1 w-20 bg-orange-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Established in 2024, Boi Squared carries forward a rich heritage of telecommunication expertise. From our humble beginnings to our present-day stature as industry leaders, we have remained steadfast in our commitment to excellence, innovation, and customer satisfaction. Our journey is defined by a relentless pursuit of perfection and an unwavering dedication to meeting the evolving needs of our clients.</p>
            </div>
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://www.directcommunications.com.au/wp-content/uploads/2020/02/AdobeStock_87481981-min-scaled.jpeg" />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Industry Pioneers</h2>
                <p class="text-base leading-relaxed mt-2">As industry pioneers, we have been at the forefront of telecommunication advancements, continuously shaping the landscape with cutting-edge solutions and groundbreaking technologies. Our track record speaks for itself, with a history of delivering reliable, innovative, and future-proof communication systems.</p>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://media.istockphoto.com/id/1372006463/photo/two-asian-man-and-woman-engineer-wears-white-safety-helmet-stand-hold-orangeprint-and-radio.jpg?s=612x612&w=0&k=20&c=Ly6H3qnAXZ3lgkI8B5YWX30wkxxs9jOPMJiP5exuDbs=" />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Customer-Centric Approach</h2>
                <p class="text-base leading-relaxed mt-2">At Boi Squared Engineering, our customers are at the heart of everything we do. We prioritize their needs, preferences, and goals, ensuring that every solution we deliver is tailored to meet their unique requirements. Our customer-centric approach sets us apart, fostering long-term relationships built on trust, transparency, and mutual success.</p>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-cover object-center h-full w-full" src="https://bcu.imgix.net/quantity-surveying-132981336674395091.jpg?auto=format&fm=jpg?mode=crop&width=710&height=300" />
                </div>
                <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Commitment to Excellence</h2>
                <p class="text-base leading-relaxed mt-2">Excellence is not just a goal; it's a fundamental principle that guides everything we do. From product design to customer service, we maintain the highest standards of quality, reliability, and performance. Our commitment to excellence is unwavering, driving us to continually innovate, improve, and exceed expectations.</p>
            </div>
            </div>
        </div>
        </section>
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-orange-500 tracking-widest font-medium title-font mb-1">Empowering Communication, Enriching Lives</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Why Choose Us</h1>
            </div>
            <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">Quality Assurance</h2>
                </div>
                <div class="flex-grow">
                    <p class="leading-relaxed text-base">Our products are built to the highest standards of quality and reliability, ensuring long-lasting performance and customer satisfaction.</p>
                    <a class="mt-3 text-orange-500 inline-flex items-center" href="/products">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">Expert Support</h2>
                </div>
                <div class="flex-grow">
                    <p class="leading-relaxed text-base">With Boi Squared Engineering, you're not just purchasing a product; you're gaining access to a team of experts who are dedicated to providing unmatched support and assistance.</p>
                    <a class="mt-3 text-orange-500 inline-flex items-center" href="/contact">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div class="flex items-center mb-3">
                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                    </div>
                    <h2 class="text-gray-900 text-lg title-font font-medium">Custom Solutions</h2>
                </div>
                <div class="flex-grow">
                    <p class="leading-relaxed text-base">We understand that every organization has unique communication needs. That's why we offer customizable solutions tailored to your specific requirements, ensuring a perfect fit for your business.</p>
                    <a class="mt-3 text-orange-500 inline-flex items-center" href="/contact">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Join Us in Shaping the Future</h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Experience the difference that Boi Squared can make in your communication journey. Explore our website to learn more about our products, services, and commitment to excellence. Together, let's shape a future where communication knows no bounds.</p>
            </div>
            <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://commandradio.com/wp-content/uploads/2016/10/two-way-radio-options.jpg" />
                </div>
                <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://kenwoodcommunications.pl/files/g/1-0/1920x500-1/Banner1.jpg" />
                </div>
                <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://peakcommunications.ca/wp-content/uploads/2020/06/Kenwood-Radio-Peak-Communication.jpg"/>
                </div>
            </div>
            <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://gencomm.com/wp-content/uploads/2021/06/radio.png"/>
                </div>
                <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://cdn-cheoj.nitrocdn.com/LPBQBcRFKMwjtExRUYlZlHCsiJiAEcQt/assets/images/optimized/rev-efc49d0/www.plant-tours.com/wp-content/uploads/2022/11/mobile.jpg"/>
                </div>
                <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://www.rcacommunicationssystems.com/wp-content/uploads/2020/11/Family-of-Radios-scaled.jpg" />
                </div>
            </div>
            </div>
        </div>
        </section>
        <CTA
  title="Ready to Transform Your Communication Experience?"
  description="Discover the difference that Boi Squared Engineering can make for your business or organization. Contact us today to learn more about our innovative solutions, dedicated support, and commitment to excellence. Let's collaborate to shape a future where communication knows no bounds."
  buttonText="Get in touch with us now to begin your journey towards seamless connectivity and unparalleled reliability."
/>

        <Footer />
        </>
    );
}

export default HomePage;