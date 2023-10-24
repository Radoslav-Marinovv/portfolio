import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Radoslav Marinov | Portfolio',
    description: 'Radoslav Marinov portfolio.',
    image: 'https://media.licdn.com/dms/image/D4D03AQGzCyBZn2KQPw/profile-displayphoto-shrink_400_400/0/1689246796211?e=1703721600&v=beta&t=7OpIVJmMVIHnKGkU8iemtpPFPFO4STEZ-r1ATYo99Es',
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="portfolio:card" content="summary_large_image" />
        <meta name="portfolio:site" content="@RadoslavMarinov" />
        <meta name="portfolio:title" content={meta.title} />
        <meta name="portfolio:description" content={meta.description} />
        <meta name="portfolio:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
