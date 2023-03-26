import type { FC } from 'react';

interface IProps {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

const Button: FC<IProps> = ({ children, className, onClick, type }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${className} bg-transparent rounded-md px-8 py-2 font-semibold transition duration-150 ease-in-out hover:opacity-80 focus:outline-none focus:ring-0 active:opacity-60`}
		>
			{children}
		</button>
	);
};

export default Button;
