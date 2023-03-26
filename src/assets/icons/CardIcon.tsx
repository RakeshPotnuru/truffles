import React from 'react';
import type { FC } from 'react';

interface IProps {
	color?: string;
}

const CardIcon: FC<IProps> = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="21"
			fill="none"
			viewBox="0 0 20 21"
		>
			<path
				stroke={color || '#718096'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="1.5"
				d="M1.667 7.587h16.666M5 14.254h1.667M8.75 14.254h3.333"
			></path>
			<path
				stroke={color || '#718096'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M5.367 3.42h9.258c2.967 0 3.708.734 3.708 3.66v6.84c0 2.926-.741 3.66-3.7 3.66H5.367c-2.959.008-3.7-.726-3.7-3.65V7.08c0-2.926.741-3.66 3.7-3.66z"
			></path>
		</svg>
	);
};

export default React.memo(CardIcon);
