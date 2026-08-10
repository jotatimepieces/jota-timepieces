import { Cormorant, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://jotatimepieces.vercel.app"),
  title: "Jota Timepieces | Relógios",
  description:
    "Jota Timepieces — Relógios selecionados com elegância, precisão e personalidade.",
  openGraph: {
    title: "Jota Timepieces | Relógios",
    description:
      "Jota Timepieces — Relógios selecionados com elegância, precisão e personalidade.",
    siteName: "Jota Timepieces",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body bg-bg text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
