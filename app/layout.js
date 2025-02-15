export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>G Learning Network</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
