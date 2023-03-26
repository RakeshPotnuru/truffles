import type { FC } from 'react';

interface IProps {
	type: string;
	name: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	className?: string;
	label?: string;
}

const Input: FC<IProps> = ({
	type,
	name,
	value,
	onChange,
	placeholder,
	className,
	label,
}) => {
	return (
		<div className="space-y-2">
			{label && (
				<label htmlFor={name} className="text-heading self-start">
					{label}
				</label>
			)}
			<input
				onChange={onChange}
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				className={`${className} border-gray-300 w-full rounded-lg border-brand-300/50 p-2`}
			/>
		</div>
	);
};

export default Input;
