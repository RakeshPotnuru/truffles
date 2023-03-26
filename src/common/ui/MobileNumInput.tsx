import { useState } from 'react';
import type { FC } from 'react';
import { countries } from '../../data/countries';

interface Country {
	name: string;
	code: string;
	exampleNumber: string;
	countryCode: string;
}

interface IProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MobileNumInput: FC<IProps> = ({ value, onChange }) => {
	const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);

	const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const countryCode = event.target.value;
		const country = countries.find(c => c.countryCode === countryCode);
		if (country) {
			setSelectedCountry(country);
		}
	};

	return (
		<div className="space-y-2">
			<label htmlFor="phone" className="text-heading">
				Mobile Number
			</label>
			<div className="flex flex-row">
				<select
					value={selectedCountry.countryCode}
					onChange={handleCountryChange}
					className="border-gray-300 w-[15%] rounded-l-lg border-brand-300/50 p-2"
				>
					{countries.map((country, index) => (
						<option key={index} value={country.countryCode}>
							{country.countryCode}
						</option>
					))}
				</select>
				<input
					onChange={onChange}
					id="phone"
					name="phone"
					value={value}
					type="number"
					placeholder={`+${selectedCountry.code} ${selectedCountry.exampleNumber}`}
					className="border-gray-300 w-[85%] rounded-r-lg border-brand-300/50 p-2"
				/>
			</div>
		</div>
	);
};

export default MobileNumInput;
