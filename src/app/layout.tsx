import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Programa IMPULSA by APD SPORT',
  description: 'Formulario de inscripción para deportistas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 1rem' }}>
          <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '1rem 2rem', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', border: '1px solid #e0eefd' }}>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, textTransform: 'uppercase', color: '#0056b3', marginBottom: '0.25rem', letterSpacing: '-0.025em' }}>
                Programa IMPULSA
              </h1>
              <span style={{ fontSize: '0.875rem', color: '#666666', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block' }}>
                by APD SPORT
              </span>
            </div>
          </header>

          <main style={{ width: '100%', maxWidth: '56rem' }}>{children}</main>

          <footer style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.875rem', color: '#9ca3af' }}>
            &copy; {new Date().getFullYear()} APD SPORT. Todos los derechos reservados.
          </footer>
        </div>
      </body>
    </html>
  );
}
