import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Logo } from '@/assets/images';
import { Button } from '../ui';
import { CloseIcon, MenuIcon, WalletIcon } from '@/assets/icons';

const Navbar = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	// const [isLessThan768, setIsLessThan768] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const isAuthenticated = localStorage.getItem('isAuthenticated');

		if (isAuthenticated) {
			setIsAuthenticated(true);
		}
	}, []);

	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		if (window.innerWidth < 768) {
	// 			setIsLessThan768(true);
	// 		}
	// 	}
	// }, []);

	return (
		<nav className="flex justify-between px-10 py-4 shadow-md">
			<Image src={Logo} alt="Truffles Logo" loading="lazy" />
			{isAuthenticated ? (
				<Button className="flex flex-row space-x-2 bg-brand-50 px-2 text-brand-100 md:px-6">
					<WalletIcon />
					<span className="hidden md:block">Connect wallet</span>
				</Button>
			) : (
				<>
					<div
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="block cursor-pointer hover:opacity-80 md:hidden"
					>
						<MenuIcon />
					</div>
					{isMenuOpen && (
						<div className="absolute right-4 top-2 flex flex-col items-center space-y-4 rounded-lg bg-brand-100 p-4 shadow-md">
							<div
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="flex cursor-pointer self-end hover:opacity-80"
							>
								<CloseIcon />
							</div>
							<Link href="/login">
								<Button>Login</Button>
							</Link>
							<Link href="/register">
								<Button>Sign Up</Button>
							</Link>
						</div>
					)}
					<div className="hidden md:block">
						<ul className="flex space-x-6">
							<li>
								<Link href="/login">
									<Button className="hover:bg-brand-300/10">Login</Button>
								</Link>
							</li>
							<li>
								<Link href="/register">
									<Button className="bg-brand-50 text-brand-100">
										Sign Up
									</Button>
								</Link>
							</li>
						</ul>
					</div>
				</>
			)}
		</nav>
	);
};

export default Navbar;
