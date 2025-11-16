export const metadata = {
  title: 'Social Media Enterprise',
  description: 'Monetize suas redes sociais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
