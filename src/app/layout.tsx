
import './style.css';
import TransitionWrapper from './TransitionWrapper';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between px-8 py-4">
          <nav className="flex gap-2">
            <a href="/" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition">Home</a>
            <a href="/menu" className="bg-yellow-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-800 transition">Menu</a>
            <a href="/reservations" className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-700 transition">Reservations</a>
            <a href="/contact" className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition">Contact</a>
          </nav>
        </header>
  <TransitionWrapper>{children}</TransitionWrapper>
        <footer>
          <p>&copy; 2025 Kareem's Restaurant. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
