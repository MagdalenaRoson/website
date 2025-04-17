'use client';
import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import contentfulLoader from '@/app/components/contentfulImageLoader';

export default function CarouselDisplay({ items }) {
  const swiperRef = useRef(null);
  return (
    <section className='carousel'>
      <div className='carousel-wrapper'>
        <div
          className='carousel-click-left'
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <div
          className='carousel-click-right'
          onClick={() => swiperRef.current?.slideNext()}
        />
        <Swiper
          modules={[Pagination, Keyboard]}
          keyboard={{ enabled: true }}
          loop
          className='carousel'
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {items.map((post) => {
            const file = post.fields.media.fields.file;
            const contentType = file.contentType;
            const isVideo = contentType.startsWith('video');

            return (
              <SwiperSlide key={post.sys.id}>
                <div className='contentWindow'>
                  {isVideo ? (
                    <video className='carouselVideo' autoPlay muted loop>
                      <source src={`https:${file.url}`} type={contentType} />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      className='carouselImage'
                      loader={contentfulLoader}
                      src={`https:${file.url}`}
                      alt='media'
                      width={1600}
                      height={900}
                    />
                  )}
                  <p className='custom-legend'>
                    {post.fields.companyName} - {post.fields.details}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
