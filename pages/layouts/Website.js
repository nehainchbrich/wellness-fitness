// import "../../styles/globals.css";
import { Header } from "@/components";
import Footer from "@/components";
import Head from "next/head";

export const metadata = {
  title: "Wellness Retreat",
  description: "Find your peace and balance with our wellness programs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Wellness - Your Journey to Better Health</title>
        <meta name="description" content="Discover personalized wellness programs designed to nurture your mind, body, and soul." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="pt-20">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}