import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <Link href={'#projects'}>PROJECTS</Link>
      <h1 className='navbarTitle'>Magdalena Roson</h1>
      <Link href={'#information'}>INFO</Link>
    </nav>
  );
};

export default Navbar;
