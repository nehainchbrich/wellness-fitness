// app/layout.js (or layout.jsx)

import "../../styles/globals.css";
import { Header, Footer } from "../../components";

export const metadata = {
  title: "Wellness - Your Journey to Better Health",
  description:
    "Discover personalized wellness programs designed to nurture your mind, body, and soul.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-20">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
