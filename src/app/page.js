import Navbar from './components/navbar';
import { fetchEntries } from '@/app/lib/contenful';
import CarouselDisplay from '@/app/components/CarouselDisplay';

export default async function Home() {
  const assets = await fetchEntries('asset'); // your content type ID
  return (
    <>
      <Navbar />
      <CarouselDisplay items={assets} />
    </>
  );
}
