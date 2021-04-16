import '../styles/normalize.css';
import '../styles/globals.css';
import React from 'react';
import { AppProps /*, AppContext */ } from 'next/app';
// import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
