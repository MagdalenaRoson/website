const ContactDetails = ({ email, phone, address, address2, socialMedia }) => {
  const phoneString = String(phone);
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
        <a className='labelValue' href={`tel:${phoneString}`}>
          {phoneString.replace(
            /(\d{2})(\d)(\d{2})(\d{2})(\d{2})(\d{2})/,
            '+$1 $2 $3 $4 $5 $6'
          )}
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
