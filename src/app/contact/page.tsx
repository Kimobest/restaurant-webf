export default function ContactPage() {
  const contactInfo = [
    { label: "Restaurant", value: "Kareem's Restaurant", color: '#6c63ff', bold: true },
    { label: "Address", value: "10 ebn-alhakam st, helmeyat elzaytoon, cairo" },
    { label: "Phone", value: "+201066735023", color: '#f7c948' },
    { label: "Email", value: "kimobest2005@gmail.com", color: '#f7c948' },
  ];
  return (
    <main className="reservation-preview" style={{background: '#f8fafc', color: '#2d2d2d'}}>
      <h1 className="text-3xl font-bold mb-4" style={{color: '#6c63ff'}}>Contact Us</h1>
      <ul style={{listStyle: 'none', padding: 0, margin: '1rem 0 2rem 0'}}>
        {contactInfo.map((info, idx) => (
          <li key={idx} style={{background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.07)', marginBottom: '1rem', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <span style={{color: info.color || '#6c63ff', fontWeight: info.bold ? 700 : 500}}>{info.label}</span>
            <span style={{color: info.color || '#2d2d2d', fontWeight: info.bold ? 700 : 500}}>{info.value}</span>
          </li>
        ))}
      </ul>
      <form style={{display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400, margin: '0 auto'}}>
        <input type="text" placeholder="Your Name" style={{padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid #6c63ff', background: '#fff'}} />
        <input type="email" placeholder="Your Email" style={{padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid #6c63ff', background: '#fff'}} />
        <textarea placeholder="Your Message" style={{padding: '0.7rem', borderRadius: '0.5rem', border: '1px solid #6c63ff', background: '#fff'}} rows={4} />
        <button type="submit" className="btn" style={{width: '100%', background: '#6c63ff'}}>Send</button>
      </form>
    </main>
  );
}