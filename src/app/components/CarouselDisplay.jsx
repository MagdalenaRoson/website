'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import contentfulLoader from '@/app/components/contentfulImageLoader';

export default function CarouselDisplay({ items }) {
  return (
    <section className='carousel'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        useKeyboardArrows
        dynamicHeight
        emulateTouch
      >
        {items.map((post) => (
          <>
            <div className='contentWindow' key={post.sys.id}>
              <Image
                key={post.sys.id}
                className='carouselImage'
                loader={contentfulLoader}
                src={`https:${post.fields.media.fields.file.url}`}
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
              {/* <p className='legend'>
                {post.fields.companyName} {post.fields.details}
              </p> */}
            </div>
          </>
        ))}
      </Carousel>
    </section>
  );
}
