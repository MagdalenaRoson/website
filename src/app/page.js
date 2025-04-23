import Image from 'next/image';
import Link from 'next/link';
import client from './lib/contenful';
import Navbar from './components/navbar';
import { fetchEntries } from '@/app/lib/contenful';
import CarouselDisplay from '@/app/components/CarouselDisplay';

export default async function Home() {
  const assets = await fetchEntries('asset'); // your content type ID

  console.log('============*******88================', assets);

  return (
    <>
      <Navbar />
      <CarouselDisplay items={assets} />
    </>
  );
}
