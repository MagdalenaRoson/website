import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href={'/'}>Magdalena Roson</Link>
      <Link href={'/information'}>Information</Link>
    </nav>
  );
};

export default Navbar;
