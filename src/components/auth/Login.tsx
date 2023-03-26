import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { Button } from '@/common/ui';
import { Input } from '@/common/ui/';
import { useState } from 'react';

interface IProps {}

const Login: FC<IProps> = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			router.push('/');
		}
	};

	return (
		<div className="h-[90vh] bg-brand-200">
			<div className="absolute top-[30%] left-[37%] flex flex-col items-center justify-center rounded-lg bg-brand-100 p-10 text-brand-300 shadow-md">
				<h1 className="text-2xl font-bold text-heading">
					Log in to your account
				</h1>
				<p>Welcome back! Please enter your details.</p>
				<form onSubmit={handleSubmit}>
					<div className="mt-10 flex w-full flex-col space-y-6">
						<Input
							onChange={e => {
								setEmail(e.target.value);
							}}
							type="email"
							name="email"
							value={email}
							placeholder="Enter your email"
							className=""
							label="Email"
						/>
						<Input
							onChange={e => {
								setPassword(e.target.value);
							}}
							type="password"
							name="password"
							value={password}
							placeholder="Enter your password"
							className=""
							label="Password"
						/>
						<Button type="submit" className="bg-brand-50 text-brand-100">
							Sign in
						</Button>
						<p className="text-center">
							Don't have an account?{' '}
							<Link
								href={'/register'}
								className="font-semibold text-brand-50 hover:text-brand-50/80"
							>
								Sign up
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
