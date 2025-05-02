import React from "react";

const Section = () => {
  return (
    <div>
      <section className="w-full px-6 py-12 bg-gradient-to-r from-yellow-100 via-purple-100 to-pink-100">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Payments infrastructure <br />
              <span className="text-blue-700">for the internet</span>
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Millions of businesses of all sizes—from startups to large
              enterprises—use Stripe’s software and APIs to accept payments,
              send payouts, and manage their businesses online.
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
                Start now
              </button>
              <button className="text-blue-700 text-sm font-medium">
                Contact sales →
              </button>
            </div>
          </div>

          <div className="relative h-64 md:h-96 flex justify-center items-center">
            <div className="bg-white w-40 h-64 md:w-56 md:h-80 rounded-xl shadow-lg z-10"></div>
            <div className="absolute top-16 left-20 w-36 h-56 bg-white rounded-xl shadow-md z-0"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
