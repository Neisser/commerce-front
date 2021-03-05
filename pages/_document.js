import Document, { Head, Main, NextScript, Html } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global CSS */}
          <title>commerce</title>
          <link rel="stylesheet" href="/styles/styles.css" />
          <meta name="description" content="we are the best commerce!" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

          {/* <!-- Facebook Meta Tags --> */}

          {/* <!-- Schema.org for Google --> */}
          {/* <!-- Twitter Meta Tags --> */}
          {/* <!-- Open Graph - Article --> */}
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
