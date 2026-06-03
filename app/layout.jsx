import './globals.css'

export const metadata = {
  title: 'Swabhiman Ball — Creator, Storyteller & Influencer',
  description: 'Lifestyle, Fashion & Travel Creator from Kolkata. Singer, digital content creator and social media influencer.',
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}