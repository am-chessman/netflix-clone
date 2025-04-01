import "../styles/globals.css"

export const metadata = {
  title: "Netflix Clone",
  description: "Meant to be a simple netflix clone"
}

export default function Layout ({children}) {
  return (
    <html>
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title} - {metadata.description}</title>
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}