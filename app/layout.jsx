import "../styles/globals.css"

export const metadata = {
  title: "Netflix Clone",
  description: "Meant to be a simple netflix clone"
}

export default function Layout ({children}) {
  return (
    <html lang="sv">
      <head>
          <title>{metadata.title}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}