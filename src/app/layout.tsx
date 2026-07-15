import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="bg-ivory-bg text-[#1A1A1A]">
        {children}
        <div></div>
      </body>
    </html>
  );
}
