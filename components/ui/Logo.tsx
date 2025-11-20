import Link from "next/link";
import Image from "next/image";
import logo from '@/public/logo_outlined.svg'

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} alt="Bogdan Stevanovic - Logo" height={64} />
      {/* <h4 className="uppercase opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out">boge.dev</h4> */}
    </Link>
  );
};
export default Logo;
