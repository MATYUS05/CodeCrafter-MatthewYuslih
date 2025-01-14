const Card = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-6 text-center">
        {/* Icon (Flexbox untuk memastikan posisi ikon di tengah) */}
        <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 bg-sky-100 rounded-full">
          <span className="text-5xl text-sky-600">{icon}</span>
        </div>
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        {/* Description */}
        <p className="text-gray-600 mb-6">{description}</p>
        {/* Button */}
        <button className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300">
          More
        </button>
      </div>
    </div>
  );
};

export default Card;
