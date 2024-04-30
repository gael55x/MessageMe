import Header from '@/components/header';
import './globals.css';

export const metadata = {
  title: 'Messageme',
  description: 'Message people with messageme',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
