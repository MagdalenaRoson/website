import React from 'react';
import { fetchEntries } from '@/app/lib/contenful';
import Link from 'next/link';

const Information = async () => {
  const userDetails = await fetchEntries('contactDetails');
  console.log('0000000000000000000000000000000000000000000', userDetails);

  const { email, about, address, phone, socialMedia } = userDetails[0].fields;

  const socialmediaLinks = socialMedia.split(',');

  return (
    <main>
      <section className='aboutSection'>
        {about}
        <br />
        <br />
        <p className='label'>Full portfolio available upon request</p>
      </section>

      <section className='contactDetailsSection'>
        <div className='contactDetails'>
          <p className='label'>E-MAIL</p>
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <div className='contactDetails'>
          <p className='label'>ADDRESS</p>
          <p>{address}</p>
        </div>
        <div className='contactDetails'>
          <p className='label'>TELEPHONE</p>
          <p>
            +
            {`${phone}`
              .split('')
              .map((digit, idx) => {
                if (idx === 2) return ` (${digit}) `;
                if (idx === 6) return `${digit}-`;
                return `${digit}`;
              })
              .join('')}
          </p>
        </div>
        <div className='contactDetails'>
          <p className='label'>SOCIAL</p>
          {socialmediaLinks.map((link, index) => (
            <p key={index}>
              <Link href={link} target='_blank'>
                @{link.replace('https://instagram.com/', '')}
              </Link>
            </p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Information;
