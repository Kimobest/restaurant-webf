"use client";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);

  return (
    <main className="reservation-preview" style={{background: '#f8fafc', color: '#2d2d2d'}}>
      <img 
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" 
        alt="Delicious food" 
        style={{width: '100%', maxWidth: '400px', borderRadius: '1rem', margin: '0 auto 2rem auto', display: 'block'}}
      />
      <h1 className="text-3xl font-bold mb-4" style={{color: '#6c63ff'}}>Menu</h1>
      <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0 2rem 0'}}>
        {menuItems.map((item: any) => (
          <li key={item.id} style={{background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '1rem', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span className="dish" style={{color: '#6c63ff', fontWeight: 600}}>{item.name}</span>
            <span className="price" style={{color: '#f7c948', fontWeight: 600}}>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}