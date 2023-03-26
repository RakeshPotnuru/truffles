import React from 'react';

const MenuIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="none"
			viewBox="0 0 24 24"
		>
			<g>
				<path
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M5 17h8m-8-5h14m-8-5h8"
				></path>
			</g>
		</svg>
	);
};

export default React.memo(MenuIcon);
