import React from 'react';

const OneThirdTwoThirdsLayout = ({images,name,text1,img}) => {
  // Replace these image URLs with your own


  return (
    <div className="flex flex-col sm:flex-row">
      {/* 1/3 Width for Text */}
      <div className="w-full sm:w-1/3  p-4">
      <article class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{backgroundImage :`url(${img})`}}>
                <div class="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-12 hover:bg-opacity-75 transform duration-300">
                    <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                       {name}
                    </h1>
                    <div class="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        {text1}
                    </p>
                </div>
            </article>
      </div>

      {/* 2/3 Width for Image Gallery */}
      <div className="w-full sm:w-2/3">
        <div className="grid grid-cols-2 gap-0">
          {images.map((imageUrl, index) => (
            <div key={index} className="bg-cover bg-center h-32 sm:h-48" style={{ backgroundImage: `url(${imageUrl})` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OneThirdTwoThirdsLayout;
