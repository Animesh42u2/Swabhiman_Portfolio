import './globals.css'
import SmokeyCursor from "../components/SmokeyCursor";

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
        <SmokeyCursor
          densityDissipation={3.5}
          velocityDissipation={2}
          splatRadius={0.25}
          splatForce={7000}
          curl={4}
        />
        {children}
      </body>
    </html>
  );
}