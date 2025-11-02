import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h4 className="uppercase opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out">boge.dev</h4>
    </Link>
  );
};
export default Logo;
