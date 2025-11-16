export const metadata = {
  title: 'Social Media Enterprise',
  description: 'Plataforma de monetização para mídias sociais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
