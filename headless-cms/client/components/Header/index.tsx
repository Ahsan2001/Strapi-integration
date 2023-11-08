'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className='flex justify-between items-center py-3'>
        <Link href='/'>
          <Image src='/logo.png' alt='Picture of the author' width={140} height={120} />
        </Link>

        <div className='block lg:hidden'>
          <button onClick={handleToggle} className='text-primary'>
            {isOpen ? 'X' : '☰'}
          </button>
        </div>

        <ul className={`lg:flex items-center ${isOpen ? 'hidden' : 'hidden'}`}>
          <li className='text-primary mr-6 font-normal'>
            <Link href='#'>Products</Link>
          </li>
          <li className='text-primary mr-6 font-normal'>
            <Link href='#'>Pricing</Link>
          </li>
          <li className='text-primary mr-6 font-normal'>
            <Link href='#'>Docs</Link>
          </li>
          <li className='text-primary font-normal'>
            <Link href='#'>Company</Link>
          </li>
        </ul>

        <ul className={`lg:flex items-center ${isOpen ? 'hidden' : 'hidden'}`}>
          <li className='text-primary mr-6 font-medium'>
            <Link href='#'>Login</Link>
          </li>
          <li className='bg-primary hover:bg-primaryDark transition-all cursor-pointer text-white py-2 px-4 rounded-sm font-medium'>
            <Link href='#'>Signup</Link>
          </li>
        </ul>
      </nav>

      <ul className={`lg:hidden ${isOpen ? 'flex flex-col items-center' : 'hidden'}`}>
        <li className='text-primary font-normal pb-2 text-sm	'>
          <Link href='#'>Products</Link>
        </li>
        <li className='text-primary font-normal pb-2 text-sm	'>
          <Link href='#'>Pricing</Link>
        </li>
        <li className='text-primary font-normal pb-2 text-sm	'>
          <Link href='#'>Docs</Link>
        </li>
        <li className='text-primary font-normal pb-2 text-sm	'>
          <Link href='#'>Company</Link>
        </li>
        <li className='text-primary font-medium pb-2 text-sm	'>
          <Link href='#'>Login</Link>
        </li>
        <li className='bg-primaryDark text-white py-2 px-4  text-sm	 rounded-sm font-medium'>
          <Link href='#'>Signup</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
