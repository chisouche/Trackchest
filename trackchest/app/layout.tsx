import "./globals.css";
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Trackchest',
  description: 'Dashboard for personal finance tracking',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginLeft: '200px', padding: '1rem', flex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
