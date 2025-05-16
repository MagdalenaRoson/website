import React from 'react';
import { fetchEntries } from '@/app/lib/contenful';
import Link from 'next/link';
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

const Information = async () => {
  const userDetails = await fetchEntries('contactDetails');
  const { email, about, address, address2, phone, socialMedia } =
    userDetails[0].fields;
  const socialmediaLinks = socialMedia.split(',');

  return (
    <div className='informationPage'>
      <main className='informationWrapper'>
        <section className='aboutSection'>
          <p className='aboutText'>
            <TextWithLineBreaks text={about} />
          </p>
          <span className='label'>Full portfolio available upon request.</span>
        </section>

        <section className='contactDetailsSection'>
          <h1 className='aboutTitle'>Contact</h1>
          <div className='contactDetails'>
            <a className='labelValue' href={`mailto:${email}`}>
              {email}
            </a>
            {/* </div> */}

            {/* <div className='contactDetails'> */}
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
            {/* </div> */}

            {/* <div className='contactDetails'> */}
            <div>
              <p className='labelValue'>{address}</p>
              <p className='labelValue'>{address2}</p>
            </div>

            <div className='socialMedia'>
              {socialmediaLinks.map((link) => (
                <Link
                  key={link}
                  className='labelValue'
                  href={link}
                  target='_blank'
                >
                  @{link.replace('https://instagram.com/', '')}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Information;
