import React from 'react';

const Information = () => {
  return (
    <div>
      <h1>Magdalena Rosen</h1>
      <p>
        Magdalena Roson is an art director based in Paris, with ten years of
        professional experience in the creative industry - working across
        luxury, fashion, beauty and fine jewellery.
      </p>
      <p>
        She is a multifaceted creative who specialises in creating global 360°
        advertising campaigns across print, digital and moving image. She
        delivers distinct artistic sensibility with a strong commercial
        emphasis. Her work spans large scale cross-platform advertisement
        campaigns, to e-commerce editorial content.
      </p>
      <p>
        Her academic background in Visual Communication, Graphic Design and Art
        History offers holistic art direction. Her work is further driven by a
        passionate interest in visual arts, film, music, design, typography and
        photography.
      </p>
      <div className='contact-info'>
        <p>
          <strong>T:</strong> <a href='tel:+33687541739'>+33 (6) 8754 1739</a>
        </p>
        <p>
          <strong>E:</strong>{' '}
          <a href='mailto:info@magdalenaroson.com'>info@magdalenaroson.com</a>
        </p>

        <div className='address'>
          <p>
            <strong>Address</strong>
          </p>
          <p>
            34 Rue Condorcet
            <br />
            75009, Paris, France
          </p>
        </div>

        <div className='social'>
          <p>
            <strong>Instagram</strong>
          </p>
          <p>
            <a
              href='https://instagram.com/magdalenaroson'
              target='_blank'
              rel='noopener noreferrer'
            >
              @magdalenaroson
            </a>{' '}
            /{' '}
            <a
              href='https://instagram.com/studioblauen'
              target='_blank'
              rel='noopener noreferrer'
            >
              @studioblauen
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
