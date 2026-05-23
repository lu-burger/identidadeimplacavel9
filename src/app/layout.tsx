import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Identidade Implacável 9.0 — Lu Burger | 8 de Agosto · Limeira",
  description:
    "Imersão presencial Identidade Implacável 9.0 com Lu Burger. 8 de Agosto de 2026 em Limeira, SP. Para pessoas que entenderam que existe muito mais para viver.",
  keywords: "identidade implacavel, lu burger, imersao, coaching, limeira, transformacao",
  openGraph: {
    title: "Identidade Implacável 9.0 — Lu Burger",
    description: "Imersão presencial de transformação pessoal. 8 de Agosto · Limeira, SP.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
