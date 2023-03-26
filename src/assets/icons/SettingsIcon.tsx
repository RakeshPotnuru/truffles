import React from 'react';
import type { FC } from 'react';

interface IProps {
	color?: string;
}

const SettingsIcon: FC<IProps> = ({ color }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="19"
			fill="none"
			viewBox="0 0 18 19"
		>
			<path
				stroke={color || '#718096'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M7.465 2.457c.39-1.61 2.68-1.61 3.07 0a1.58 1.58 0 002.359.977c1.414-.861 3.034.758 2.172 2.173a1.58 1.58 0 00.977 2.358c1.61.39 1.61 2.68 0 3.07a1.58 1.58 0 00-.977 2.359c.861 1.414-.758 3.034-2.173 2.172a1.58 1.58 0 00-2.358.977c-.39 1.61-2.68 1.61-3.07 0a1.58 1.58 0 00-2.359-.977c-1.414.861-3.034-.758-2.172-2.173a1.58 1.58 0 00-.977-2.358c-1.61-.39-1.61-2.68 0-3.07a1.58 1.58 0 00.977-2.359c-.861-1.414.758-3.034 2.173-2.172a1.579 1.579 0 002.358-.977z"
			></path>
			<path
				stroke={color || '#718096'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M9 12.25a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z"
			></path>
		</svg>
	);
};

export default React.memo(SettingsIcon);
