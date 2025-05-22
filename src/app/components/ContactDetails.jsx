const ContactDetails = ({ email, phone, address, address2, socialMedia }) => {
  const socialmediaLinks = socialMedia.split(',');

  return (
    <section className='contactDetailsSection'>
      <div className='contactDetails'>
        <a className='labelValue' href={`mailto:${email}`}>
          <span className='italicHover'>{email}</span>
        </a>
        <div>
          <p className='labelValue'>{address}</p>
          <p className='labelValue'>{address2}</p>
        </div>
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
        <div className='socialMedia'>
          {socialmediaLinks.map((link) => (
            <a key={link} className='labelValue' href={link} target='_blank'>
              <span className='italicHover'>
                @{link.replace('https://instagram.com/', '')}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
