import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const Blog = () => {
  return (
    <div>
      {/* Main Heading */}
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <p className="text-3xl mb-1 text-left">Next JS Documentation</p>
        <div className="z-10 max-w-5xl w-full flex flex-col lg:flex-row items-center justify-between font-mono text-sm">
          <div className="flex flex-col lg:w-2/5 mr-4 mb-8 lg:mb-0">
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-4 lg:mb-0">
              <Link href="https://nextjs.org/docs">
                <h2 className="mb-2 text-xl font-semibold">Introduction</h2>
                <p className="m-0 max-w-[30ch] text-sm">
                 
"Introducing Next.js: Elevating React development with server-side rendering and effortless routing."
                </p>
              </Link>
            </div>
            <h1 className='py-10'></h1>
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <Link href="https://nextjs.org/docs/app/building-your-application/routing">
                <h3 className="text-xl font-semibold mb-2">Routing</h3>
                <p className="text-sm">"Effortless routing: Navigating users seamlessly through your application with Next.js."</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:w-2/5">
            {/* New Card */}
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-4 lg:mb-0">
              <Link href="https://nextjs.org/docs/app/building-your-application/data-fetching">
                <h3 className="text-xl font-semibold mb-2">Data Fetching</h3>
                <p className="text-sm">"Efficient data fetching: Streamlining server-side data retrieval for seamless user experiences in Next.js."</p>
              </Link>
            </div>
            <h1 className='py-10'></h1>
            {/* Another New Card */}
            <div className="group rounded-lg border border-transparent px-2 py-10 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              
              <Link href="https://nextjs.org/docs/app/building-your-application/rendering">
                
                <h3 className="text-xl font-semibold mb-2">Rendering</h3>
                <p className="text-sm">"Efficient rendering: Maximizing performance and user experience in Next.js applications."</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Placeholder for the bottom fixed content */}
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t  dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {/* Placeholder for the bottom fixed content */}
        </div>
      </main>
    </div>
  );
};

export default Blog;
