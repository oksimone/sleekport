import Link from 'next/link';
import Image from 'next/image'
import mylogo from 'public/oksimonefr.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
       
        <nav>
      <ul>
        <li>
          <Link href="/#">
            Home
          </Link>
        </li>
        <li>
          <Link href="/#">
            About
          </Link>
        </li>
        <li>
          <Link href="/#">
            Contact
          </Link>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
          
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
       
            <Image
              src={mylogo}
              alt="Kristian Logo"
              width={300}
              height={200}
              priority
            />
          </a>
 
      </div>


      
    </main>
  )
}
