import React from 'react';
import type { FC } from 'react';

interface IProps {
	color?: string;
}

const AssetsIcon: FC<IProps> = ({ color, ...props }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="21"
			fill="none"
			viewBox="0 0 20 21"
		>
			<path
				fill={color || '#718096'}
				d="M14.825 19.458h-9.65a4.14 4.14 0 01-4.133-4.141V9.142c0-1.134.7-2.559 1.6-3.259l4.491-3.5c1.35-1.05 3.509-1.1 4.909-.116l5.15 3.608c.991.692 1.766 2.175 1.766 3.383v6.067a4.138 4.138 0 01-4.133 4.133zM7.9 3.367l-4.492 3.5c-.591.466-1.116 1.525-1.116 2.275v6.175a2.891 2.891 0 002.883 2.891h9.65a2.884 2.884 0 002.883-2.883V9.258c0-.8-.575-1.908-1.233-2.358l-5.15-3.608c-.95-.667-2.517-.634-3.425.075z"
			></path>
			<path
				fill={color || '#718096'}
				d="M10 16.125a.63.63 0 01-.625-.625V13a.63.63 0 01.625-.625.63.63 0 01.625.625v2.5a.63.63 0 01-.625.625z"
			></path>
		</svg>
	);
};

export default React.memo(AssetsIcon);
