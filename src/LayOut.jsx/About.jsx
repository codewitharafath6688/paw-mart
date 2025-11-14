import React from "react";

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/h1nL1ndD/photo-1484190929067-65e7edd5a22f-mark-https-images-unsplash-com-opengraph-logo-png-mark-w-64-mark-al.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="*:mt-3">
          <h3 className="text-2xl font-bold">Why Adopt from PawMart?</h3>
          <p className="text-gray-500">
            We're more than just a marketplace; we're a community dedicated to
            the well-being of every pet. When you choose to adopt from PawMart,
            you're not just getting a pet-you're saving a life and gaining a new
            family member.
          </p>
          <ul>
            <div>
              <span className="font-bold ">Community Vetted : </span>
              <div>
                Every listing is from a trusted shelter, rescue, or individual
                in your community.
              </div>
            </div>
            <div>
              <span className="font-bold ">Support & Resources : </span>
              <div>
                Gain access to a wealth of articles, guides, and community
                support for newpet parents
              </div>
            </div>
            <div>
              <span className="font-bold ">Save a Life : </span>
              <div>
                By adopting you give a deserving animal a second chance at a
                happy life.
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
