const ResImage = ({ imageUrls, firstImage }) => {
    return (
      <div className="grid grid-cols-3 grid-rows-2 gap-4 ">
        {imageUrls?.map((url, index) => (
          <div key={index} className={`${index === 0 ? "" : ""} h-[5rem]`}>
            {index === 0 ? (
              <img
                src={firstImage}
                alt="First Image"
                width={600}
                height={300}
                className="object-cover  h-full rounded-lg col-span-5 row-span-2"
              />
            ) : (
              <img
                src={url}
                alt={`Image ${index + 1}`}
                
                className="object-cover w-full h-full rounded-lg"
              />
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default ResImage;
