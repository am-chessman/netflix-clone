import "../styles/globals.css"

export const metadata = {
  title: "Netflix Clone",
  description: "Meant to be a simple netflix clone"
}

export default function Layout ({children}) {
  return (
    <html>
      <head>
        <title>{metadata.title} : {metadata.description}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>
        {children}
      </body>
    </html>
  )
}