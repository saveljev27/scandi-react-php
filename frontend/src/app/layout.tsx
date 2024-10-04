import type { Metadata } from 'next';
import '../app/styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Footer } from './components';

export const metadata: Metadata = {
  title: 'Scandiweb | Main Page',
  description: 'Scandiweb Test Assigment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
