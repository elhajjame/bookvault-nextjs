import Header from "./_components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="min-h-screen bg-ivory-bg text-[#1A1A1A] dark:bg-[#120E0B] dark:text-zinc-200 flex flex-col justify-between transition-colors duration-300">
        <Header />
        <main>{children}</main>
        <div></div>
      </body>
    </html>
  );
}
