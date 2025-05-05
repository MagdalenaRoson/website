import React from 'react';
function TextWithLineBreaks({ text }) {
  const lines = text.split(/\r?\n/);
  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}
import { fetchEntries } from '@/app/lib/contenful';
import Link from 'next/link';

const Information = async () => {
  const userDetails = await fetchEntries('contactDetails');
  const { email, about, address, phone, socialMedia } = userDetails[0].fields;
  const socialmediaLinks = socialMedia.split(',');

  return (
    <div className='informationPage'>
      <main className='informationWrapper'>
        <section className='aboutSection'>
          <TextWithLineBreaks text={about} />
          <p className='label'>Full portfolio available upon request</p>
        </section>

        <section className='contactDetailsSection'>
          <div className='contactDetails'>
            <p className='label'>E-MAIL</p>

            <a className='labelValue' href={`mailto:${email}`}>
              {email}
            </a>
          </div>

          <div className='contactDetails'>
            <p className='label'>TELEPHONE</p>

            <a className='labelValue' href={`tel:${phone}`}>
              +
              {`${phone}`
                .split('')
                .map((digit, idx) => {
                  if (idx === 2) return ` (${digit}) `;
                  if (idx === 6) return `${digit}-`;
                  return `${digit}`;
                })
                .join('')}
            </a>
          </div>
          <div className='contactDetails'>
            <p className='label'>INSTAGRAM</p>
            {socialmediaLinks.map((link, index) => (
              <p key={index}>
                <Link className='labelValue' href={link} target='_blank'>
                  @{link.replace('https://instagram.com/', '')}
                </Link>
              </p>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Information;
