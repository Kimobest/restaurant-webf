export default function ContactPage() {
  return (
    <main style={{ padding: "2rem", maxWidth: 600, margin: "auto" }}>
      <h1>Contact Us</h1>
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