import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <div
      className="flex items-center justify-between px-3 py-2 text-white lg:px-20"
      style={{ height: '10vh' }}
    >
      <a>
        <Link href="/" passHref>
          <div className="flex items-center space-x-4 cursor-pointer">
            <Image
              src="/assets/logo.png"
              alt="nav-icon"
              className="object-contain w-12 h-12"
              width={48}
              height={48}
            />
            <div className="hidden md:block">
              <p>Father, Husband & Teacher</p>
              <p>Save Mr. White</p>
            </div>
          </div>
        </Link>
      </a>
      <div className="flex space-x-6 text-base uppercase md:text-xl">
        <a className={pathname === '/donate' ? 'text-green' : ''}>
          <Link href="/donate">Donate</Link>
        </a>
        <a className={pathname === '/family' ? 'text-green' : ''}>
          <Link href="/family">Family</Link>
        </a>
        <a className={pathname === '/stats' ? 'text-green' : ''}>
          <Link href="/stats">Stats</Link>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
