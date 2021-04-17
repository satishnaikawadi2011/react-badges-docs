import React from 'react';
import Document, { Html, Head, Main, DocumentContext, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		const url = '';
		const description =
			'This is a React Component Library. With help of this you can create Customizable and Reusable React Badge component for your all kinds of Projects and WebSites.';
		const image =
			'https://res.cloudinary.com/dg2zkumuc/image/upload/v1618564550/React%20Badges/react-badges_oarucd.gif';
		const title = 'React Badges';
		return (
			<Html data-theme="dark" lang="en">
				<Head>
					<link rel="icon" type="image/png" href="/favicon.png" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
					<meta name="HandheldFriendly" content="True" />
					<meta name="MobileOptimized" content="320" />
					<meta name="theme-color" content="#2196f3" />
					<title>{title}</title>
					<meta name="og:title" content={title} />
					<meta name="og:type" content="article" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@publisher_handle" />
					<meta name="twitter:title" content={title} />
					<meta name="description" content={description} />
					<meta name="og:description" content={description} />
					<meta name="twitter:description" content={description} />
					<meta name="image" content={image} />
					<meta name="twitter:image" content={image} />
					<meta name="og:image" content={image} />
					<React.Fragment>
						<meta name="og:url" content={url} />
					</React.Fragment>
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
