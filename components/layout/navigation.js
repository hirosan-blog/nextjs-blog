import Link from "next/link";

export default function Navigation() {
  return (
    <header className="container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg">
      <Link href="/"> 
        <a className="text-4xl font-bold text-red-500">NextJS Blog</a>
      </Link>
      <nav className="ml-auto">
        <Link href="/about">
          <a className="mr-5">About</a>
        </Link>
        <Link href="/about">
          <a className="mr-5">Contact</a>
        </Link>
        <Link href="/about">
          <a className="mr-5">Create</a>
        </Link>
      </nav>
    </header>
  );
}