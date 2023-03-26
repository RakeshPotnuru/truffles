import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { email, name, password, country, company, phone } = req.body.formData;

	// Check if the credentials are valid
	const response = await fetch(`${process.env.BACKEND_URL}/register`, {
		method: 'POST',
		body: JSON.stringify({ email, password, name, country, company, phone }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		res.status(200).end();
	} else {
		res.status(401).end();
	}
}
