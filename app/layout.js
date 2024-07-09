import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../styles/style.css";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollToTopButton from "@/components/buttons/ScrollToTopButton";

export const metadata = {
  title: {
    template: "%s | Munim Consulting Group",
    default: "Munim Consulting Group - Financial Consulting Services",
  },
  description: "Munim Consulting Group - Your Trusted Financial Advisors",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mt-4">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
