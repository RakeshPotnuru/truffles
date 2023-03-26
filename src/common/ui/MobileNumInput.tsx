import { useState } from 'react';
import { countries } from '../../data/countries';

type Country = {
	name: string;
	code: string;
	exampleNumber: string;
	countryCode: string;
};

const MobileNumInput = () => {
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
					id="phone"
					name="phone"
					type="tel"
					placeholder={`+${selectedCountry.code} ${selectedCountry.exampleNumber}`}
					className="border-gray-300 w-[85%] rounded-r-lg border-brand-300/50 p-2"
				/>
			</div>
		</div>
	);
};

export default MobileNumInput;
