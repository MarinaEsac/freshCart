import React from 'react';
import Link from 'next/link';

export default function ProjectsLayout({ children }) {
  return <>
    <div className='grid grid-cols-2 h-screen bg-[#eee]'>
      <div className='bg-white p-4'>
        <ul>
          <li><Link href="/projects/web">Web Projects</Link></li>
          <li><Link href="/projects/mobile">Mobile Projects</Link></li>
          <li><Link href="/projects/desktop">Desktop Projects</Link></li>
        </ul>
      </div>
      <div className='p-4'> 
        {children}
      </div>
    </div>
    </>
}




