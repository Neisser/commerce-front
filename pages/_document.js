import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<html lang="en">
				<Head>
                    {/* Global CSS */}
					{/* <link rel="stylesheet" href="/styles/global.min.css" /> */}
                    <title>commerce</title>
					<meta name="description" content="we are the best commerce!" />

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
			</html>
		);
	}
}

export default MyDocument
