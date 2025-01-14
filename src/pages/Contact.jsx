import AnimationWrapper from "../components/AnimationWrapper";

const Contact = () => {
  return (
    <AnimationWrapper>
      <div className="container mx-auto py-16 px-4 mt-10">
        {/* Heading Section */}
        <h1 className="text-4xl font-bold text-center text-sky-600 mb-8">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We'd love to hear from you! Whether you have a question about our
          services or just want to say hello, feel free to reach out using the
          form below or visit us at our location.
        </p>

        {/* Form and Map Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <form className="space-y-6 bg-white p-8 rounded shadow-md border border-gray-200">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-sky-600"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-sky-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-sky-600"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-sky-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-sky-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full mt-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-sky-300"
                rows="5"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sky-600 text-white font-semibold py-3 rounded hover:bg-sky-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Google Maps Embed */}
          <div className="rounded overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Company Location"
            ></iframe>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Contact;
