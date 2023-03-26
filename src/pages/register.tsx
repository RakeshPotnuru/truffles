import Head from 'next/head';

import siteConfig from '../../config/site.config';
import Register from '@/components/auth/Register';

export default function RegisterPage() {
	return (
		<>
			<Head>
				<title>{siteConfig.seo.pages.register.title}</title>
				<meta
					name="description"
					content={siteConfig.seo.pages.register.description}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Register />
			</main>
		</>
	);
}
