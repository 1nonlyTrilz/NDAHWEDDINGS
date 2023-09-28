{galleryItems.map((imageUrl, index) => (
    <div key={index} className="bg-white overflow-hidden">
      <img
        src={imageUrl}
        alt={`Image ${index + 1}`}
        className="w-full h-64 object-cover"
      />
    </div>
  ))}