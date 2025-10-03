"use client";

export default function ContactPage() {
  return (
    <main className="menu-theme reservation-preview">
      <h1 className="text-3xl font-bold mb-4" style={{ color: "#6c63ff" }}>
        Contact Us
      </h1>
      <form action="https://formspree.io/f/xgvnybnv" method="POST">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      <div style={{ marginTop: "2rem" }}>
        <strong>Kareem's Restaurant</strong>
        <div>10 ebn-alhakam st, helmeyat elzaytoon, cairo</div>
        <div>Phone: +201066735023</div>
        <div>Email: kimobest2005@gmail.com</div>
      </div>
    </main>
  );
}