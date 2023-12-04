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
    <div className='mt-auto'>
    <Box sx={{ flexGrow: 1 }}>
          <Swiper
      effect='cube'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><ProjectCard /></SwiperSlide>
      <SwiperSlide><ProjectCard /></SwiperSlide>
      <SwiperSlide><ProjectCard/></SwiperSlide>

      <SwiperSlide><ProjectCard /></SwiperSlide>
      <SwiperSlide><ProjectCard /></SwiperSlide>
      <SwiperSlide><ProjectCard/></SwiperSlide>

   
    </Swiper>
    </Box>
    </div>
  );
}

