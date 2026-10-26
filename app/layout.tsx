import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La caseta del sabor | El raspado es primero",
  description: "Raspados clásicos y gourmet en Tuxtla Gutiérrez, Chiapas.",
};

const introBoot = `try {
  if (!localStorage.getItem('caseta-intro-seen') && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.dataset.intro = 'playing';
  }
} catch (_) { /* A static hero remains usable if storage is unavailable. */ }`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introBoot }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
