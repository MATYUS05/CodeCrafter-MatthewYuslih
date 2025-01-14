import React from "react";

const OurClients = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-16 lg:px-32">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-sky-600">Our Clients</h1>
      </div>

      {/* Container 1*/}
      <div className="container mx-auto bg-white shadow-xl flex flex-col md:flex-row items-center gap-8 ">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.pravatar.cc/3000?=60"
            alt="Client"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center md:items-start">
          <h2 className="text-2xl text-center md:text-left font-bold text-sky-600 mb-4">
            Client #1
          </h2>
          <p className="text-black mb-6 text-sm md:text-base text-center md:text-left italic">
            "We have been very happy with our new website! It looks professional
            and is very easy to navigate. The customer service at Thrive has
            been exceptional, and they truly listened to our needs, delivering a
            site that exceeded our expectations."
          </p>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-black/50 transition">
            Read More
          </button>
        </div>
      </div>

      {/* Container 2*/}
      <div className="container mx-auto bg-white shadow-xl flex flex-col-reverse md:flex-row items-center gap-8 mt-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center md:items-start">
          <h2 className="text-2xl text-center md:text-left font-bold text-sky-600 mb-4">
            Client #2
          </h2>
          <p className="text-black mb-6 text-sm md:text-base text-center md:text-left italic">
            "We just completed our new website with CodeCrafter Web Design and are thrilled with the results! The site is not only visually appealing but also functions flawlessly on mobile devices. Their support has been fantastic, making it easy for us to implement changes ourselves."
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-black/50 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.pravatar.cc/3000?=50"
            alt="Client meeting"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Container 3*/}
      <div className="container mx-auto bg-white shadow-xl flex flex-col md:flex-row items-center gap-8 mt-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.pravatar.cc/3000?=40"
            alt="Client"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col items-center md:items-start">
          <h2 className="text-2xl text-center md:text-left font-bold text-sky-600 mb-4">
            Client #3
          </h2>
          <p className="text-black mb-6 text-sm md:text-base text-center md:text-left italic">
            "The team at CodeCrafter Web transformed our online presence! Their expertise in integrating modern technologies like AI into our website has significantly improved our user engagement and search engine visibility. We couldn't be happier with the results!"
          </p>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-black/50 transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
