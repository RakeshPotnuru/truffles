import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button, MobileNumInput } from '@/common/ui';
import Input from '@/common/ui/Input';
import { countries } from '@/data/countries';

const Register = () => {
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		password: '',
		country: '',
		company: '',
		phone: '',
	});

	const router = useRouter();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const response = await fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify({ formData }),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (response.ok) {
			router.push('/');
		}
	};

	return (
		<div className="h-[140vh] bg-brand-200">
			<div className="absolute top-[20%] left-0 flex flex-col items-center justify-center rounded-lg bg-brand-100 p-10 text-brand-300 shadow-md md:left-[15%] lg:top-[20%] lg:left-[35%]">
				<h1 className="text-2xl font-bold text-heading">Sign Up</h1>
				<p>Create an account to get started.</p>
				<form onSubmit={handleSubmit}>
					<div className="mt-10 flex w-full flex-col space-y-6">
						<Input
							onChange={handleInputChange}
							type="email"
							name="email"
							value={formData.email}
							placeholder="Enter your email"
							className=""
							label="Work Email"
						/>
						<Input
							onChange={handleInputChange}
							type="text"
							name="name"
							value={formData.name}
							placeholder="Enter your first name"
							label="Name"
						/>
						<Input
							onChange={handleInputChange}
							type="password"
							name="password"
							value={formData.password}
							placeholder="Create a password"
							label="Password"
						/>
						<div className="flex flex-col space-y-2">
							<label htmlFor="country" className="self-start text-heading">
								Country of Residence
							</label>
							<select
								onChange={handleCountryChange}
								name="country"
								id="country"
								className="rounded-md border border-brand-300/50 p-2"
							>
								{countries.map((country, index) => (
									<option key={index} value={country.name}>
										{country.name}
									</option>
								))}
							</select>
						</div>
						<Input
							onChange={handleInputChange}
							type="text"
							name="company"
							value={formData.company}
							placeholder="Enter your company name"
							label="Company Name"
						/>
						<MobileNumInput
							onChange={handleInputChange}
							value={formData.phone}
						/>
						<Button type="submit" className="bg-brand-50 text-brand-100">
							Create Account
						</Button>
						<p className="text-center">
							By signing up, you agree to our Terms of use & privacy policy.
							<br />
							Already have an account?{' '}
							<Link
								href={'/login'}
								className="font-semibold text-brand-50 hover:text-brand-50/80"
							>
								Sign in
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
