import React from 'react';
import type { FC } from 'react';

interface IProps {
	color?: string;
}

const ChartIcon: FC<IProps> = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="19"
			fill="none"
			viewBox="0 0 20 19"
		>
			<path
				stroke={color || '#718096'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M6.143 8.001v5.717M10.032 5.266v8.452M13.857 11.022v2.696"
			></path>
			<path
				stroke={color || '#718096'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M13.905 1.167h-7.81c-2.722 0-4.428 1.926-4.428 4.654v7.358c0 2.728 1.698 4.654 4.428 4.654h7.81c2.73 0 4.428-1.926 4.428-4.654V5.821c0-2.728-1.698-4.654-4.428-4.654z"
				clipRule="evenodd"
			></path>
		</svg>
	);
};

export default React.memo(ChartIcon);
