import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  // console.log(router.pathname, router.asPath);
  return (
    <nav>
      <div className="logo">
        <Image
          src="/assets/img/logo.png"
          alt="site logo"
          width={128}
          height={77}
        />
      </div>
      <Link href="/">
        <a className={router.pathname == '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname == '/about' ? 'active' : ''}>About</a>
      </Link>
      <Link href="/ninjas">
        <a className={router.asPath.includes('/ninjas') ? 'active' : ''}>
          Ninjas
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
