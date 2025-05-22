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

const AboutText = ({ about }) => {
  return (
    <section id='information' className='aboutSection'>
      <p className='aboutText'>
        <span className='name'>Magdalena Roson </span>
        <TextWithLineBreaks text={about} />
      </p>
    </section>
  );
};

export default AboutText;
