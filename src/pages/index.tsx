import Head from 'next/head';
import Cookies from 'cookies';
import { GetServerSideProps } from 'next';

import Dashboard from '@/components/dashboard/Dashboard';
import siteConfig from '../../config/site.config';

type Asset = {
	id: number;
	asset: string;
	amount: number;
	status: string;
};

interface ProtectedPageProps {
	assets: Asset[];
}

export default function DashboardPage({ assets }: ProtectedPageProps) {
	return (
		<>
			<Head>
				<title>{siteConfig.seo.pages.home.title}</title>
				<meta
					name="description"
					content={siteConfig.seo.pages.home.description}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Dashboard assets={assets} />
			</main>
		</>
	);
}

// @ts-ignore
export const getServerSideProps: GetServerSideProps<
	ProtectedPageProps
> = async context => {
	const { req, res } = context;

	const cookies = new Cookies(req, res);
	const token = cookies.get('token');

	if (!token) {
		return {
			redirect: {
				destination: '/login',
				permanent: false,
			},
		};
	}

	const response = await fetch(`${process.env.BACKEND_URL}/getassets`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		// Redirect the user to the login page if they're not authenticated
		res.setHeader('Location', '/login');
		res.statusCode = 302;
		res.end();
		return { props: {} };
	}

	// Get the assets data
	const { data } = await response.json();

	return {
		props: {
			assets: data,
		},
	};
};
