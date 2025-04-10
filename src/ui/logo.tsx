import Link from "next/link";

const Logo = () => {
  return (
    <div className="text-wh">
      <Link href="/">
        <span className="text-xl font-medium text-white">Stratify</span>
      </Link>
    </div>
  );
};

export default Logo;
