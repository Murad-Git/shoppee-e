import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/images/icons/ship-icon2.png" />
          <meta name="author" content="Murad Kos" key="author" />
          <meta property="og:title" content="E-commerce webshop" />
          <meta
            property="og:description"
            content="Find your favourite product, buy it immediately or save it for later"
          />
          <meta
            property="og:image"
            content="/images/icons/page-screenshot.png"
          />
          <meta property="og:image:alt" content="Landing page" />
          <meta
            property="og:url"
            content="https://shoppee-e-wnsg.vercel.app/"
            data-react-helmet="true"
          />
          <meta property="og:type" content="website" data-react-helmet="true" />
          <meta property="fb:app_id" content="857361435508119" />
        </Head>
        <body>
          <div id="overlays" />
          <div id="loader" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
