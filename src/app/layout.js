import { Mulish } from "next/font/google";

import "./globals.css";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
  title: "Claudio silva - Portifolio",
  description: "Bem vindos!",
  icons : {icon : ["/favicon.ico"]}
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
