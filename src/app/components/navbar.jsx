'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <nav>
      <a
        onClick={() => setActiveSection('projects')}
        href='#projects'
        className={`nav-link${activeSection === 'projects' ? ' active' : ''}`}
      >
        PROJECTS
      </a>
      <h1 className='navbarTitle'>Magdalena Roson</h1>
      <a
        onClick={() => setActiveSection('information')}
        href='#information'
        className={`nav-link${
          activeSection === 'information' ? ' active' : ''
        }`}
      >
        INFO
      </a>
    </nav>
  );
};

export default Navbar;
