export default function Html({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>React SSR streaming</title>
        <link rel='stylesheet' href='client.css' />
      </head>
      <body>{children}</body>
    </html>
  );
}
