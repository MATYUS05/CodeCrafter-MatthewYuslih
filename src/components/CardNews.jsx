import React from "react";

const CardNews = ({ image, title, description, url }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden">
      {/* Gambar */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      {/* Konten */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">
          {description.slice(0, 100)}...
        </p>
        {/* Tombol Arahkan ke URL */}
        <div className="flex justify-center mt-4">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-white bg-sky-600 hover:bg-sky-700 rounded-md"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
