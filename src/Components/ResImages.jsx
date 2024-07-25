const ResImage = ({ imageUrls, firstImage }) => {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {imageUrls?.map((url, index) => (
          <div key={index} className={index === 0 ? "col-span-2 row-span-2" : ""}>
            {index === 0 ? (
              <img
                src={firstImage}
                alt="First Image"
                width={600}
                height={300}
                className="object-cover w-full h-[315px] rounded-lg"
              />
            ) : (
              <img
                src={url}
                alt={`Image ${index + 1}`}
                width={200}
                height={150}
                className="object-cover w-full h-[150px] rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default ResImage;
