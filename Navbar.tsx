import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-100 p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">Eco Store</Link>
      <div className="flex gap-4">
        <Link href="/cart">Cart</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
