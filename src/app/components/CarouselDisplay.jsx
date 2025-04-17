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
        {items.map((post) => {
          const file = post.fields.media.fields.file;
          const contentType = file.contentType;

          const isVideo = contentType.startsWith('video');

          return (
            <div className='contentWindow' key={post.sys.id}>
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
          );
        })}
      </Carousel>
    </section>
  );
}
