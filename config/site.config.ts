import { Inter } from 'next/font/google';

import DATA from './site.config.json';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const siteConfig = {
	seo: DATA.seo,
	branding: {
		logo: DATA.logo,
		colors: DATA.colors,
		fonts: {
			primary: inter,
		},
	},
	copyrightText: `© ${new Date().getFullYear()} Truffles. All rights reserved.`,
	siteVersion: DATA.siteVersion,
};

export default siteConfig;
