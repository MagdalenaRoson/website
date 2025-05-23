'use server';
import Navbar from './components/navbar';
import { fetchEntries } from '@/app/lib/contenful';
import CarouselDisplay from '@/app/components/CarouselDisplay';
import ContactDetails from './components/ContactDetails';
import AboutText from './components/AboutText';

export default async function Home() {
  const [contactDetails, assets] = await Promise.all([
    fetchEntries('contactDetails'),
    fetchEntries('asset'),
  ]);
  const { email, about, address, address2, phone, socialMedia } =
    contactDetails[0].fields;

  const sortedAssets = assets.slice().sort((a, b) => {
    const numA = Number(a.fields.orderNumber);
    const numB = Number(b.fields.orderNumber);
    return numA - numB;
  });

  return (
    <>
      <Navbar />
      <CarouselDisplay items={sortedAssets} />
      <main>
        <AboutText about={about} />
        <ContactDetails
          email={email}
          phone={phone}
          address={address}
          address2={address2}
          socialMedia={socialMedia}
        />
      </main>
    </>
  );
}
