export default function HomePage() {
  return (
    <main className="home-main" style={{background: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h1 style={{fontSize: '3rem', color: '#6c63ff', fontWeight: 900, marginBottom: '3rem', zIndex: 2, position: 'relative'}}>Kareem's Restaurant</h1>
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" alt="Delicious food" style={{width: '420px', maxWidth: '90vw', borderRadius: '2rem', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', marginTop: '0'}} />
    </main>
  );
}
