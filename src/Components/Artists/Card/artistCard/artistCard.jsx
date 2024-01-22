import React from 'react';

const OneThirdTwoThirdsLayout = ({images,name,text1,text2,img}) => {
  // Replace these image URLs with your own


  return (
    <div className="flex flex-col sm:flex-row">
      {/* 1/3 Width for Text */}
      <div className="max-w-md :w3/3  md:w-1/3  p-4">
      <article class="mx-auto  shadow-md bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group" style={{backgroundImage :`url(${img})`}}>
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
      <div className="w-full sm:w-3/3 md:w-2/3">
<div class="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
  <div class="">
    <h2 class="font-semibold dark:text-white lg:text-4xl text-md text-gray-800 md:w-full w-9/12 mx-auto">{name}</h2>
    <p class="font-normal text-base dark:text-gray-400 text-gray-600 mt-4 lg:w-5/12 md:w-9/12 mx-auto">{text2}</p>
  </div>
  <div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:grap-8 md:gap-6 gap-4 mt-10">
    <div class="relative group">
      <img src={images[1]} alt="A picture of a sitting dog" class="lg:block hidden w-full" />
      <img src={images[1]} alt="A picture of a sitting dog" class="lg:hidden block w-full" />
      
    </div>
    <div class="relative group">
      <img src={images[2]}alt="Smiling Girl" class="lg:block hidden w-full" />
      <img src={images[2]} alt="Smiling Girl" class="lg:hidden block w-full" />
     
    </div>
    <div class="relative group">
      <img src={images[3]} alt="Men Posing" class="lg:block hidden w-full" />
      <img src={images[3]} alt="Men Posing" class="lg:hidden block w-full" />
    
    </div>
    <div class="relative group">
      <img src={images[0]} alt="2 puppies" class="lg:block hidden w-full" />
      <img src={images[0]} alt="2 puppies" class="lg:hidden block w-full" />
     
    </div>
  </div>
</div>

</div>

    </div>
  );
};

export default OneThirdTwoThirdsLayout;
