import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import StairTransition from "../components/StairTransition";

const josefin_Sans = Josefin_Sans({
  variable: "--font-josein-sans",
  subsets: ["latin"],
  Weight: [100, 200, 300, 400, 500, 600, 700],
});

export const metadata = {
  title: "Barkat Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin_Sans.variable}`}>
        <Header></Header>
        <StairTransition></StairTransition>
        <PageTransition> {children}</PageTransition>
      </body>
    </html>
  );
}
