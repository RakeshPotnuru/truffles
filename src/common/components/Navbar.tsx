import Image from 'next/image';

import { Logo } from '@/assets/images';
import { Button } from '../ui';
import { WalletIcon } from '@/assets/icons';

const Navbar = () => {
	return (
		<nav className="flex justify-between px-10 py-4 shadow-md">
			<Image src={Logo} alt="Truffles Logo" loading="lazy" />
			{/* <ul className="flex space-x-6">
				<li>
					<Button className="hover:bg-brand-300/10">Login</Button>
				</li>
				<li>
					<Button className="bg-brand-50 text-brand-100">Sign Up</Button>
				</li>
			</ul> */}
			<Button className="flex flex-row space-x-2 bg-brand-50 px-4 text-brand-100">
				<WalletIcon />
				<span>Connect wallet</span>
			</Button>
		</nav>
	);
};

export default Navbar;
