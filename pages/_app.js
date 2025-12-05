import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  // Pages that should have their own full layout control without template wrapper
  const useOwnLayout = Component.useOwnLayout || false;

  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header transparent={useOwnLayout} />
      {useOwnLayout ? (
        <Component {...pageProps} />
      ) : (
        <main className="pt-16 md:pt-20 min-h-screen">
          <Component {...pageProps} />
        </main>
      )}
      <Footer />
    </div>
  );
}