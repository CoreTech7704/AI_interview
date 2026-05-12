import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-base-300">
      <div className="navbar max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="text-xl font-bold">
            interview<span className="text-primary">.co</span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex gap-2">
          {/* Optional links (keep minimal) */}
          <ul className="menu menu-horizontal px-1 hidden md:flex">
            <li>
              <a>Features</a>
            </li>
          </ul>

          {/* CTA Button */}
          <Link href="/interview" className="btn btn-primary mt-1">
            Start Interview
          </Link>
        </div>
      </div>
    </nav>
  );
}
