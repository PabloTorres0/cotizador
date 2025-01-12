import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import FooterComponent from "@/components/FooterComponent";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cotizador",
  description: "Sun sauna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="global-container">
          <nav>
            <Nav/>
          </nav>
            <div className="section-container">
              <div className="section-2container">
                {children}
              </div>
            </div>
          <FooterComponent/>
      </body>
    </html>
  );
}
