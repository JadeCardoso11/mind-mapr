import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('/api/products').then(res => setProducts(res.data));
  }, []);

  const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Eco Store</h1>
      <input
        type="text"
        placeholder="Search eco products..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="border px-2 py-1 mb-4 w-full"
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map(product => (
          <div key={product.id} className="border p-2 rounded">
            <h2 className="font-semibold">{product.name}</h2>
            <p>${product.price}</p>
            <Link href={`/product/${product.id}`} className="text-blue-500">View</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
