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
      <body className="container">
        <h1>Product List</h1>
        {children}
        <Footer />
      </body>
    </html>
  );
}
