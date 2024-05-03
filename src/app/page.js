import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="bg-black">
        {" "}
        {/* Navbar */}
        <ul className="flex justify-center text-center py-4">
          <li className="nav-item mr-4">
            <Link
              href="/"
              className="nav-link active flex-grow-1 block py-2 px-4 text-white rounded-md transition duration-300 ease-in-out hover:bg-gray-800"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link
              href="/about"
              className="nav-link flex-grow-1 block py-2 px-4 text-white rounded-md transition duration-300 ease-in-out hover:bg-gray-800"
            >
             Node JS
            </Link>
          </li>

          <li className="nav-item mr-4">
            <Link
              href="/contact"
              className="nav-link flex-grow-1 block py-2 px-4 text-white rounded-md transition duration-300 ease-in-out hover:bg-gray-800"
            >
             React JS
            </Link>
          </li>
          <li className="nav-item mr-4">
            <Link
              href="/blog"
              className="nav-link flex-grow-1 block py-2 px-4 text-white rounded-md transition duration-300 ease-in-out hover:bg-gray-800"
            >
             Next JS
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Heading */}
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Hunting Code
        </h1>
        <p className="text-2xl">Welcome to Hunting Coder! This website is dedicated to all things coding, where we explore various topics related to software development and technology. Get ready to embark on a journey through the world of coding as we delve into different aspects of programming, ranging from deploying applications in Node.js to building interactive user interfaces with React and Next.js. Whether you're a seasoned developer looking to expand your skills or a newcomer eager to learn, Hunting Coder is your go-to destination for insightful articles, tutorials, and tips to help you navigate the ever-evolving landscape of coding. Join us as we unravel the mysteries of software development and embark on a quest to master the art of coding.
        </p>
        {/* <img src="screenshot (46).png" alt="" /> */}
        {/* <h2 className="text-3xl text-center mb-8">
          A blog for hunting coders by hunting coders
        </h2> */}
        <h1 className="text-3xl mb-8 text-left">Top-Trending Blogs</h1>
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            {/* Get started by editing&nbsp; */}
            {/* <code className="font-mono font-bold">src/app/page.js</code> */}
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
         
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://www.smashingmagazine.com/2023/11/designing-web-design-documentation/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Documentation of Web development{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://delta.blue/blog/deploy-run-nodejs-application-tutorial/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy in Node js{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Node.js site to a shareable URL with Vercel.
            </p>
          </a>

          <a
            href="https://create-react-app.dev/docs/deployment/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy in React Js{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your React.js site to a shareable URL with Vercel.
            </p>
          </a>

          <a
            href="https://nextjs.org/docs/pages/building-your-application/deploying"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy in Next Js{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
