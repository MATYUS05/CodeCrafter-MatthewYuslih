import React from "react";

const CardNews = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      {/* Gambar */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      {/* Konten */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description.slice(0, 100)}...</p>
      </div>
    </div>
  );
};

export default CardNews;
