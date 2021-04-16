import React from 'react';
import Document, { Html, Head, Main, DocumentContext, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html data-theme="dark" lang="en">
				<Head>
					<link rel="icon" type="image/png" href="/favicon.png" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
					<meta name="HandheldFriendly" content="True" />
					<meta name="MobileOptimized" content="320" />
					<meta name="theme-color" content="#2196f3" />
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

// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;
	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles:
			[
				...React.Children.toArray(initialProps.styles),
				sheets.getStyleElement()
			]
	};
};
