import React from "react";
export function FeaturedImageGallery() {
  const data = [
    {
      imgelink:
        "https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/7238b14d-4869-4ff5-1646-72302ba90400/public",
    },
    {
      imgelink:
        "https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/4c2d1a45-1ae1-484d-48ed-6b0296bcab00/public",
    },
    {
      imgelink:
        "https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/d880a9d3-7a52-4cef-6d1a-e5c59bacbb00/public",
    },
    {
      imgelink:
        "https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/0c4c3088-323f-4547-de64-e97efecfe300/public",
    },
    {
      imgelink:
        "https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/656c2eec-95f0-4946-e498-255cd0ca6700/public",
    },
  ];
 
  const [active, setActive] = React.useState(
    "https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/656c2eec-95f0-4946-e498-255cd0ca6700/public",
  );
 
  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedImageGallery;