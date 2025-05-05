'use client';
import { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import contentfulLoader from '@/app/components/contentfulImageLoader';
import Loadingcomponent from '@/app/components/loadingcomponent';

export default function CarouselDisplay({ items }) {
  if (!items || items.length === 0) {
    return <Loadingcomponent />;
  }
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);
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
          modules={[Pagination, Keyboard, EffectFade]}
          fadeEffect={{ crossFade: true }}
          keyboard={{ enabled: true }}
          loop
          speed={1000}
          className='carousel'
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChangeTransitionStart={() => setFade(false)}
          onSlideChangeTransitionEnd={(swiper) => {
            setActiveIndex(swiper.realIndex);
            setFade(true);
          }}
        >
          {items.map((post, index) => {
            const file = post.fields.media.fields.file;
            const contentType = file.contentType;
            const isVideo = contentType.startsWith('video');

            return (
              <SwiperSlide key={post.sys.id}>
                <div
                  className={`contentWindow ${index === 0 ? 'fade-in' : ''}`}
                >
                  <div className='mediaWrapper'>
                    {isVideo ? (
                      <video
                        className='carouselImage'
                        autoPlay
                        muted
                        loop
                        playsInline
                        priority='true'
                      >
                        <source src={`https:${file.url}`} type={contentType} />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        className='carouselImage'
                        loader={contentfulLoader}
                        src={`https:${file.url}`}
                        alt='media'
                        width={2050}
                        height={1000}
                        priority
                      />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className='mediaMeta'>
          <p className={`counter ${fade ? 'blur-in' : 'blur-out'}`}>
            {activeIndex + 1} of {items.length}
          </p>
          <div className={`customLegend ${fade ? 'blur-in' : 'blur-out'}`}>
            <p className='assetCompany'>
              {items[activeIndex].fields.companyName}
            </p>
            <p className='assetDetails'>{items[activeIndex].fields.details}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
