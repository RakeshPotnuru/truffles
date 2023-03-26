import Head from 'next/head';

import Login from '@/components/auth/Login';
import siteConfig from '../../config/site.config';

export default function LoginPage() {
	return (
		<>
			<Head>
				<title>{siteConfig.seo.pages.login.title}</title>
				<meta
					name="description"
					content={siteConfig.seo.pages.login.description}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Login />
			</main>
		</>
	);
}
