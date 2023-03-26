import React from 'react';

const CloseIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="#000"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M16 8l-8 8m0-8l8 8"
			></path>
		</svg>
	);
};

export default React.memo(CloseIcon);
