import { Footer } from '../components/footer';

export default function AddPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
      {children}
      <Footer />
    </div>
  );
}
