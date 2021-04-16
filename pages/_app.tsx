import '../styles/normalize.css';
import '../styles/globals.css';
import App from 'next/app';
import { AppProps /*, AppContext */ } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default MyApp;
