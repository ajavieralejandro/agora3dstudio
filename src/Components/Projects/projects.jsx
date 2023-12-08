import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Hero from '../Hero/hero';
import ProjectCard from '../ProjectCard/projectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import { Navigation, Pagination, Scrollbar, A11y,EffectCube } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <div className='container'>
   
<div class="bg-black overflow-hidden relative lg:flex lg:items-center">
    <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
               Trabajo Con Artistas
            </span>
        </h2>
        <p class="text-md mt-4 text-gray-400">
            Explora Nuestros diferentes proyectos donde acompañamos a artistas a incorporar tecnología 3D
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 align-center rounded-md shadow">
                <button type="button" class="py-2 px-4  bg-blue-400 hover:bg-blue-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Ver Proyectos
                </button>
            </div>
        </div>
    </div>
    <div class="flex items-center gap-8 p-8 lg:p-24">
        <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/e35ad156-6447-4547-2dd6-bcf3eb361a00/public" class="w-1/2 rounded-lg" alt="Tree"/>
        <div>
            <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/545e97d8-4295-4833-2efb-48975ebdd600/public" class="mb-8 rounded-lg" alt="Tree"/>
            <img src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/c20fb578-99bc-4b35-934d-bf5a52e14c00/public" class="rounded-lg" alt="Tree"/>
        </div>
    </div>
</div>

    </div>
  );
}

