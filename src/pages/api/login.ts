import type { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { email, password } = req.body;

	// Check if the credentials are valid
	const response = await fetch(`${process.env.BACKEND_URL}/login`, {
		method: 'POST',
		body: JSON.stringify({ email, password }),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) {
		// Get the token from the response body
		const data = await response.json();
		const cookies = new Cookies(req, res);

		// Set a secure token as a cookie to identify the authenticated user
		cookies.set('token', data.data.token, { httpOnly: true });

		res.status(200).end();
	} else {
		res.status(401).end();
	}
}
