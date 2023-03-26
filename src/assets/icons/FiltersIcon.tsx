import React from 'react';

const FiltersIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="12"
			fill="none"
			viewBox="0 0 18 12"
		>
			<path
				stroke="#344054"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.67"
				d="M4 6h10M1.5 1h15m-10 10h5"
			></path>
		</svg>
	);
};

export default React.memo(FiltersIcon);
