import './globals.css'
//👇 Import our second font
import { Open_Sans, Roboto_Mono, Montserrat, Space_Grotesk, Outfit} from 'next/font/google'

import localFont from 'next/font/local'

const openSansConfig = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-opensans',
})

const montserratConfig = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-montserrat',
})

const spaceGroteskConfig = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-space-grotesk',
})

//👇 Configure the object for our second font
const robotoMonoConfig = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const OutfitConfig = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
}]
  const pulsarConfig = Pulsar({
  src:' /gamaftr2025-main/Pulsar.otf',
  display: 'swap',
  variable: '--font-pulsar',
  
})

export const metadata = {
  title: 'Gadjah Mada Flies To Riau 2025',
  description: 'Generated by create next app',
}

const generateStructuredData = () => {
  const logoUrl = '/image/favicon.ico'; // Update with your logo URL
  const websiteName = 'GAMAFTR 2025'; // Update with your website name

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    'name': websiteName,
    'url': 'https://gamaftr.site', // Update with your website URL
    'logo': logoUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function RootLayout({ children }) {
  return (
    // 👇 Attach CSS variables to HTML
    <html
      lang="en"
      className={`${openSansConfig.variable} ${robotoMonoConfig.variable} ${spaceGroteskConfig.variable} ${montserratConfig.variable} font-sans`}
    >
      <head>
        {/* Add the link to the favicon */}
        <link rel="shortcut icon" href="/image/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png"/>
          <meta name="description" content="GAMAFTR diinsiasikan untuk memperkenalkan Universitas Gadjah Mada kepada siswa dan siswi SMA/sederajat di Provinsi Riau" />
  <meta name="og:title" content="GAMAFTR 2025" />
  <meta name="og:description" content="GAMAFTR diinsiasikan untuk memperkenalkan Universitas Gadjah Mada kepada siswa dan siswi SMA/sederajat di Provinsi Riau" />
  <meta name="og:image" content="/image/favicon.ico" />
  <meta name="og:url" content="https://gamaftr.site" />
  {generateStructuredData()}
        {/* Other meta tags and styles go here */}
      </head>
      <body>{children}</body>
    </html>
  )
}
