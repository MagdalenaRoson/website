import Image from 'next/image';
import client from './lib/contenful';
import { fetchEntries } from '@/app/lib/contenful';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default async function Home() {
  const assets = await fetchEntries('asset'); // your content type ID

  console.log('============*******88================', assets);

  return (
    <div>
      <h1>Blog</h1>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        dynamicHeight
        emulateTouch
      >
        {assets.map((post) => (
          <div key={post.sys.id}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
              }}
            >
              <Image
                src={`https:${post.fields.media.fields.file.url}`}
                alt='test'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2>{post.fields.companyName}</h2>
            <p>{post.fields.details}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
