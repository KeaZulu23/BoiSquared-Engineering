import React from "react";
import { CloudArrowUpIcon, CogIcon, LockClosedIcon, ServerIcon, ArrowPathIcon } from '@heroicons/react/20/solid';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA.js";
import pic1 from '../MD61X_2.jpg';
import vid1 from "../video.mp4"


const features = [
  {
    name: 'Industry Pioneers:',
    description:
      'As industry pioneers, we have been at the forefront of telecommunication advancements, continuously shaping the landscape with cutting-edge solutions and groundbreaking technologies. Our track record speaks for itself, with a history of delivering reliable, innovative, and future-proof communication systems.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Customer-Centric Approach:',
    description: 'At Boi Squared Engineering, our customers are at the heart of everything we do. We prioritize their needs, preferences, and goals, ensuring that every solution we deliver is tailored to meet their unique requirements. Our customer-centric approach sets us apart, fostering long-term relationships built on trust, transparency, and mutual success.',
    icon: LockClosedIcon,
  },
  {
    name: 'Commitment to Excellence:',
    description: "Excellence is not just a goal; it's a fundamental principle that guides everything we do. From product design to customer service, we maintain the highest standards of quality, reliability, and performance. Our commitment to excellence is unwavering, driving us to continually innovate, improve, and exceed expectations.",
    icon: ServerIcon,
  },
];

const featuresSec = [
  {
    name: 'Quality Assurance',
    description:
      'Our products are built to the highest standards of quality and reliability, ensuring long-lasting performance and customer satisfaction.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Expert Support',
    description:
      "With Boi Squared Engineering, you're not just purchasing a product; you're gaining access to a team of experts who are dedicated to providing unmatched support and assistance.",
    icon: LockClosedIcon,
  },
  {
    name: 'Custom Solutions',
    description:
      "We understand that every organization has unique communication needs. That's why we offer customizable solutions tailored to your specific requirements, ensuring a perfect fit for your business.",
    icon: ArrowPathIcon,
  },
  {
    name: 'Reliability',
    description:
      "When you partner with us, you can trust that we will deliver on our promises, no matter the challenge.",
    icon: CogIcon,
  },
];

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section className="bg-center bg-no-repeat bg-[url('https://www.hytera.com/iwov-resources/hytera/01_homepage/en_ap5bp5_homepage_banner.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Your Trusted Telecommunication Partner
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            At Boi Squared Engineering, we believe that communication is not just a tool; it's the lifeline that connects communities, businesses, and individuals. With a legacy spanning decades, we stand as the epitome of telecommunication excellence, committed to delivering innovative solutions that transcend boundaries and empower our clients to thrive in an interconnected world.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900">
              Get started
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-orange-600">Boi Squared Engineering</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who We Are</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Established in 2021, Boi Squared carries forward a rich heritage of telecommunication expertise. From our humble beginnings to our present-day stature as industry leaders, we have remained steadfast in our commitment to excellence, innovation, and customer satisfaction. Our journey is defined by a relentless pursuit of perfection and an unwavering dedication to meeting the evolving needs of our clients.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-orange-600" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="https://www.directcommunications.com.au/wp-content/uploads/2020/02/AdobeStock_87481981-min-scaled.jpeg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600">Empowering Communication, Enriching Lives</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Us</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {featuresSec.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600">Discover Our Innovations</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Video Showcase</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 lg:mx-auto">
              Take a closer look at how Boi Squared Engineering is transforming the world of telecommunication with our latest innovations and solutions.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <iframe width="800" height="450" src={vid1} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay&mute=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Join Us in Shaping the Future
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Experience the difference that Boi Squared can make in your communication journey. Explore our website to learn more about our products, services, and commitment to excellence. Together, let's shape a future where communication knows no bounds.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://cdn-fjhmp.nitrocdn.com/gvFsCvsaqnSxlgkfVkKnXrilkLsmRsgP/assets/images/optimized/rev-c6dad12/www.audiolink.co.uk/wp-content/uploads/2023/04/Hytera-Products.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={pic1} />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://peakcommunications.ca/wp-content/uploads/2020/06/Kenwood-Radio-Peak-Communication.jpg" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://gencomm.com/wp-content/uploads/2021/06/radio.png" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://cdn-cheoj.nitrocdn.com/LPBQBcRFKMwjtExRUYlZlHCsiJiAEcQt/assets/images/optimized/rev-efc49d0/www.plant-tours.com/wp-content/uploads/2022/11/mobile.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://static.wixstatic.com/media/73b37b_65d40a77076e4191a754d282f1f8d7d9~mv2.jpg/v1/crop/x_0,y_0,w_746,h_350,q_80,usm_4.00_1.00_0.00,enc_auto/73b37b_65d40a77076e4191a754d282f1f8d7d9~mv2.jpg" />
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
};

export default HomePage;
