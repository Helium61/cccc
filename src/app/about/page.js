import React from 'react';
import Link from 'next/link'; 

const About = () => {
  return (
    <div>
      {/* Main Heading */}
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <p className="text-3xl mb-1 text-left">Node JS Documentation</p>
        <div className="z-10 max-w-5xl w-full flex flex-col lg:flex-row items-center justify-between font-mono text-sm">
          <div className="flex flex-col lg:w-2/5 mr-4 mb-8 lg:mb-0">
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-4 lg:mb-0">
              <Link href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs">
                <h2 className="mb-2 text-xl font-semibold">Introduction</h2>
                <p className="m-0 max-w-[30ch] text-sm">
                Unlock the power of Node.js: "Dive into the world of server-side JavaScript with our expert insights".
                </p>
              </Link>
            </div>
            <h1 className='py-10'></h1>
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              <Link href="https://nodejs.org/en/learn/getting-started/the-v8-javascript-engine">
                <h3 className="text-xl font-semibold mb-2">V8 Engine</h3>
                <p className="text-sm">
"Boosted by the lightning-fast V8 Engine, Node.js accelerates performance to unprecedented levels."</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:w-2/5">
            {/* New Card */}
            <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 mb-4 lg:mb-0">
              <Link href="https://nodejs.org/en/learn/getting-started/nodejs-with-typescript">
                <h3 className="text-xl font-semibold mb-2">Node Js with TypeScript</h3>
                <p className="text-sm">"Elevate your Node.js projects with TypeScript: Adding type safety and enhanced development capabilities"</p>
              </Link>
            </div>
            <h1 className='py-10'></h1>
            {/* Another New Card */}
            <div className="group rounded-lg border border-transparent px-2 py-10 transition-colors hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
              
              <Link href="https://nodejs.org/en/learn/asynchronous-work/asynchronous-flow-control">
                
                <h3 className="text-xl font-semibold mb-2">Asyncronous Flow</h3>
                <p className="text-sm">"Flow with async: Unleashing the agility of non-blocking operations".</p>
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

export default About;
