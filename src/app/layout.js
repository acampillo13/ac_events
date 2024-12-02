import './styles/globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AC Events</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}