'use client';
import { useRef, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import contentfulLoader from '@/app/components/contentfulImageLoader';

export default function CarouselDisplay({ items }) {
  const swiperRef = useRef(null);
  return (
    <section
      className='carousel'
      style={{
        width: '100vw',
        height: 'calc(100vh - 50px)',
        marginTop: '50px',
      }}
    >
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '50%',
            height: '100%',
            zIndex: 10,
          }}
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '50%',
            height: '100%',
            zIndex: 10,
          }}
          onClick={() => swiperRef.current?.slideNext()}
        />
        <Swiper
          modules={[Pagination]}
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
                      style={{
                        maxWidth: '90vw',
                        maxHeight: '90vh',
                        width: 'auto',
                        height: 'auto',
                      }}
                    />
                  )}
                  <p className='custom-legend'>
                    {post.fields.companyName} {post.fields.details}
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
