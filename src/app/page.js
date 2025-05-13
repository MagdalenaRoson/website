import Navbar from './components/navbar';
import { fetchEntries } from '@/app/lib/contenful';
import CarouselDisplay from '@/app/components/CarouselDisplay';

export default async function Home() {
  const assets = await fetchEntries('asset');
  const sortedAssets = assets.slice().sort((a, b) => {
    const numA = Number(a.fields.media.fields.title.match(/^\d+/)[0]);
    const numB = Number(b.fields.media.fields.title.match(/^\d+/)[0]);
    return numA - numB;
  });

  return (
    <>
      <Navbar />
      <CarouselDisplay items={sortedAssets} />
    </>
  );
}
