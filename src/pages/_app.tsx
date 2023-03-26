import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import siteConfig from '../../config/site.config';
import { Navbar } from '@/common/components';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={`${siteConfig.branding.fonts.primary.variable} font-sans`}>
			<Navbar />
			<Component {...pageProps} />
		</main>
	);
}
