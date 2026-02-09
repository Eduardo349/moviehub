import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0b0b0b] text-white">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
