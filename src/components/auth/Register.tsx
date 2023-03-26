import { Button, MobileNumInput } from '@/common/ui';
import Input from '@/common/ui/Input';
import { countries } from '@/data/countries';
import Link from 'next/link';

const Register = () => {
	return (
		<div className="h-[120vh] bg-brand-200">
			<div className="absolute top-[20%] left-[35%] flex flex-col items-center justify-center rounded-lg bg-brand-100 p-10 text-brand-300 shadow-md">
				<h1 className="text-2xl font-bold text-heading">Sign Up</h1>
				<p>Create an account to get started.</p>
				<form>
					<div className="mt-10 flex w-full flex-col space-y-6">
						<Input
							type="email"
							name="email"
							value=""
							placeholder="Enter your email"
							className=""
							label="Work Email"
						/>
						<Input
							type="text"
							name="firstName"
							value=""
							placeholder="Enter your first name"
							className=""
							label="Name"
						/>
						<Input
							type="password"
							name="password"
							value=""
							placeholder="Create a password"
							className=""
							label="Password"
						/>
						<div className="flex flex-col space-y-2">
							<label htmlFor="country" className="self-start text-heading">
								Country of Residence
							</label>
							<select
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
						<MobileNumInput />
						<Button className="bg-brand-50 text-brand-100">
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
