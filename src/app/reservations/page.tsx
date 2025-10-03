"use client";
import { useEffect, useState } from "react";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch("/api/reservations")
      .then((res) => res.json())
      .then((data) => setReservations(data));
  }, []);

  return (
    <main className="reservation-preview" style={{background: '#f8fafc', color: '#2d2d2d'}}>
      <h1 className="text-3xl font-bold mb-4" style={{color: '#6c63ff'}}>Reservations</h1>
      <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0 2rem 0'}}>
        {reservations.map((r: any) => (
          <li key={r.id} style={{background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '1rem', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <div className="font-semibold" style={{color: '#6c63ff'}}>{r.name}</div>
            <div>Date: <span style={{color: '#f7c948'}}>{r.date}</span></div>
            <div>Time: <span style={{color: '#f7c948'}}>{r.time}</span></div>
            <div>Guests: <span style={{color: '#f7c948'}}>{r.guests}</span></div>
          </li>
        ))}
      </ul>
    </main>
  );
}