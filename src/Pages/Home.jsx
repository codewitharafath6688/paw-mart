import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Latest from "../LayOut.jsx/Latest";
import About from "../LayOut.jsx/About";
import { Link } from "react-router";

const latestPromise = fetch("http://localhost:3000/pets").then((res) =>
  res.json()
);

const Home = () => {
  return (
    <div>
      <div>
        <Swiper
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[565px]"
          autoplay={{ delay: 3000 }}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="w-full h-full opacity-[0.9] bg-center bg-cover flex justify-center items-center px-5 text-center"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/Z6PHfZG4/nelly-denysova-7-HA78-Qkr7p-Y-unsplash.jpg')",
              }}
            >
              <h1
                className="text-white font-bold 
          text-xl sm:text-2xl md:text-4xl lg:text-5xl drop-shadow-lg"
              >
                “Find Your Furry Friend Today!”
              </h1>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="w-full h-full opacity-[0.9] bg-center bg-cover flex justify-center items-center px-5 text-center"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/MDGVvBy9/piotr-musiol-0-Mdk-FBJyag-unsplash.jpg')",
              }}
            >
              <h1
                className="text-white font-bold 
          text-xl sm:text-2xl md:text-4xl lg:text-5xl drop-shadow-lg"
              >
                “Adopt, Don’t Shop — Give a Pet a Home.”
              </h1>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="w-full h-full opacity-[0.9] bg-center bg-cover flex justify-center items-center px-5 text-center"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/6RSnYmcF/vlad-ion-Rmm-XSYIBC9o-unsplash.jpg')",
              }}
            >
              <h1
                className="text-white font-bold 
          text-xl sm:text-2xl md:text-4xl lg:text-5xl drop-shadow-lg"
              >
                “Because Every Pet Deserves Love and Care.”
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="my-10">
        <h2 className="text-xl text-center mb-4 font-semibold">
          Shop by Category
        </h2>
        <div className="w-11/12 min-h-48 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/adoption"
            className="w-full h-full opacity-[0.7] bg-center bg-cover rounded-xl flex flex-col justify-end items-start p-4"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/LdytdxFH/jordan-durzi-1a-M-1-E5-WGT8-unsplash.jpg')",
            }}
          >
            <h3 className="text-white font-bold">Pets (Adoption)</h3>
          </Link>
          <Link
            to="/petFood"
            className="w-full h-full opacity-[0.7] bg-center bg-cover rounded-xl flex flex-col justify-end items-start p-4"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/fzBzTN8H/mathew-coulton-zxqa-Akkay-P8-unsplash.jpg')",
            }}
          >
            <h3 className="text-white font-bold">Pet Food</h3>
          </Link>
          <Link
            to="/accesories"
            className="w-full h-full opacity-[0.7] bg-center bg-cover rounded-xl flex flex-col justify-end items-start p-4"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/cc22QRgB/chris-jarvis-NOLrg-L3h-UJg-unsplash.jpg')",
            }}
          >
            <h3 className="text-white font-bold">Pet Accessories</h3>
          </Link>
          <Link to="/careProducts"
            className="w-full h-full opacity-[0.7] bg-center bg-cover rounded-xl flex flex-col justify-end items-start p-4"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/7tZFjMy7/neakasa-s1cbq-Xro-X0-unsplash.jpg')",
            }}
          >
            <h3 className="text-white font-bold">Pet Care Products</h3>
          </Link>
        </div>
      </div>
      <div className="my-10 w-11/12 mx-auto">
        <h2 className="text-xl text-center mb-4 font-semibold">
          Recent Listings
        </h2>
        <Latest latestPromise={latestPromise}></Latest>
      </div>
      <div>
        <About></About>
      </div>
      <div className="mt-8 mb-2">
        <h2 className="text-xl text-center mb-4 font-semibold">
          Meet Our Pet Heroes
        </h2>

        <div className=" p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-[#cbcbcb] p-3 rounded-xl">
            <div>
              <img
                className="rounded-xl"
                src="https://i.ibb.co.com/kVyyr02M/photo-1514888286974-6c03e2ca1dba-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg"
              />
            </div>
            <p className="mt-2">
              "We were looking for a running buddy, and we found Daisy. She has
              more energy than all of us combined and gives the best cuddles
              after a long day" <br />
              <span className="font-bold mt-3">- Sarah J.</span>
            </p>
          </div>
          <div className="bg-[#cbcbcb] p-3 rounded-xl">
            <div>
              <img
                className="rounded-xl"
                src="https://i.ibb.co.com/qMDWHwt6/photo-1534361960057-19889db9621e-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg"
              />
            </div>
            <p className="mt-2">
              "Luna was shy at first, but with a little patience: her wonderful
              personality has shone through. Seeing her transformation has been
              Incredible. <br />
              <span className="font-bold mt-3">- Mark & Emily</span>
            </p>
          </div>
          <div className="bg-[#cbcbcb] p-3 rounded-xl">
            <div>
              <img
                className="rounded-xl"
                src="https://i.ibb.co.com/jvFc5N4S/photo-1652535874452-b41668d57b27-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg"
              />
            </div>
            <p className="mt-2">
              "Adopting Leo was the best decision we ever made. He's filled our
              home with so much jay and endless purs. Thank you, PawMart, for
              connecting us! <br />
              <span className="font-bold mt-3">- The Miller Family</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
