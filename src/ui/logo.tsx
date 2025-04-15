import Link from "next/link";

const Logo = () => {
  return (
    <div className="text-wh">
      <Link href="/">
        <span className="text-2xl font-medium text-white">ΛrtMuse</span>
      </Link>
    </div>
  );
};

export default Logo;
