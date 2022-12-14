import Link from 'next/link';
import {useState} from 'react';

function MainHeader() {
  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
  <nav className="p-6 bg-white shadow flex items-center justify-between flex-wrap">
    <div className="flex items-center flex-no-shrink mr-6">
      <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span className="font-semibold text-xl tracking-tight">
      <Link href='/'>NextEvents</Link>
      </span>
    </div>
    <div className="block lg:hidden">
      <button onClick={handleClick} className="flex flex-end items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:border-black">
        <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div style={{display: isShown ? 'block' : 'none'}} className="w-full lg:block lg:flex lg:items-center relative left-0 lg:w-auto">
      <div className="lg:inline-block text-sm px-4 py-2 hover:text-cyan-600 mt-4 lg:mt-0 mr-6">
      <Link href='/events'>Browse All Events</Link>
      </div>
      <div className="lg:inline-block text-sm px-4 py-2 hover:text-cyan-600 mt-4 lg:mt-0 mr-6">
      <Link href='/route1'>Route 1</Link>
      </div>
      <div className="lg:inline-block text-sm px-4 py-2 hover:text-cyan-600 mt-4 lg:mt-0 mr-6">
      <Link href='/route2'>Route 2</Link>
      </div>
    </div>
  </nav>
  );
}

export default MainHeader;