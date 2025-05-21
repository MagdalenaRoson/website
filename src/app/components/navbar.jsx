import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href={'#projects'}>Projects</Link>
      <h1 className='navbarTitle'>Magdalena Roson</h1>
      <Link href={'#information'}>Info</Link>
    </nav>
  );
};

export default Navbar;
