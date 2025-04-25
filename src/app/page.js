import Navbar from './components/navbar';
import { fetchEntries } from '@/app/lib/contenful';
import CarouselDisplay from '@/app/components/CarouselDisplay';

export default async function Home() {
  const assets = await fetchEntries('asset'); // your content type ID

  console.log(`Well, well, well...
Looks like you've found the hidden section.

I'm a full-stack developer with a background in psychology and philosophy.
Also a drummer, a cook, and a dog lover.

Reach out:
your.email@example.com
github.com/yourusername
linkedin.com/in/yourusername`);

  return (
    <>
      <Navbar />
      <CarouselDisplay items={assets} />
    </>
  );
}
