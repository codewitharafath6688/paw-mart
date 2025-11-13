import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Latest from "../LayOut.jsx/Latest";

const latestPromise = fetch('http://localhost:3000/pets').then(res => res.json())

const Home = () => {
  return (
    <div>
      <div>
        <Swiper
          className="w-full h-[565px]"
          autoplay={{ delay: 3000 }}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="w-full h-full opacity-[0.8] bg-center bg-cover flex justify-center items-center"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/Z6PHfZG4/nelly-denysova-7-HA78-Qkr7p-Y-unsplash.jpg')",
              }}
            >
              <h1 className="text-white font-bold text-4xl">
                “Find Your Furry Friend Today!”
              </h1>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="w-full h-full opacity-[0.8] bg-center bg-cover flex justify-center items-center"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/MDGVvBy9/piotr-musiol-0-Mdk-FBJyag-unsplash.jpg')",
              }}
            >
              <h1 className="text-white font-bold text-4xl">
                “Adopt, Don’t Shop — Give a Pet a Home.”
              </h1>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="w-full h-full opacity-[0.8] bg-center bg-cover flex justify-center items-center"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/6RSnYmcF/vlad-ion-Rmm-XSYIBC9o-unsplash.jpg')",
              }}
            >
              <h1 className="text-white font-bold text-4xl">
                “Because Every Pet Deserves Love and Care.”
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-10">
        <h2 className="text-xl text-center mb-4 font-semibold">Shop by Category</h2>
        <div className="w-11/12 h-48 mx-auto grid grid-cols-4 gap-6">
          <div
            className="w-full h-full opacity-[0.7] bg-center bg-cover rounded-xl flex flex-col justify-end items-start p-4"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/LdytdxFH/jordan-durzi-1a-M-1-E5-WGT8-unsplash.jpg')",
            }}
          >
            <h3 className="text-white font-bold">Pets (Adoption)</h3>
          </div>
          <div
            className="w-full h-full opacity-[0.7] bg-center bg-cover rounded-xl flex flex-col justify-end items-start p-4"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/fzBzTN8H/mathew-coulton-zxqa-Akkay-P8-unsplash.jpg')",
            }}
          >
            <h3 className="text-white font-bold">Pet Food</h3>
          </div>
          <div
            className="w-full h-full opacity-[0.7] bg-center bg-cover rounded-xl flex flex-col justify-end items-start p-4"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/cc22QRgB/chris-jarvis-NOLrg-L3h-UJg-unsplash.jpg')",
            }}
          >
            <h3 className="text-white font-bold">Pet Accessories</h3>
          </div>
          <div
            className="w-full h-full opacity-[0.7] bg-center bg-cover rounded-xl flex flex-col justify-end items-start p-4"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/7tZFjMy7/neakasa-s1cbq-Xro-X0-unsplash.jpg')",
            }}
          >
            <h3 className="text-white font-bold">Pet Care Products</h3>
          </div>
        </div>
      </div>
      <div className="my-10 w-11/12 mx-auto">
        <h2 className="text-xl text-center mb-4 font-semibold">Recent Listings</h2>
        <Latest latestPromise={latestPromise}></Latest>
      </div>
    </div>
  );
};

export default Home;
