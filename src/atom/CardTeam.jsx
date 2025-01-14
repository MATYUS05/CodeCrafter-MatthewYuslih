const CardTeam = ({ imageSrc, altText, title, description, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center max-w-sm w-full ${className}`}
    >
      {/* Gambar */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Judul */}
      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
        {title}
      </h3>
      {/* Deskripsi */}
      <p className="text-gray-600 text-sm md:text-base text-center line-clamp-3">
        {description}
      </p>
    </div>
  );
};

export default CardTeam;
