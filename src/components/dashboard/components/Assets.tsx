import type { FC } from 'react';

import { Button } from '@/common/ui';
import { FiltersIcon } from '@/assets/icons';

type Asset = {
	id: number;
	asset: string;
	amount: number;
	status: string;
};

interface IProps {
	assets: Asset[];
}

const Assets: FC<IProps> = ({ assets }) => {
	return (
		<div
			className="h-[90vh] w-[80%] overflow-y-auto p-4 md:w-[90%] md:p-10 lg:w-[80%] lg:p-16"
			style={{
				background:
					'linear-gradient(180deg, rgba(246, 247, 251, 0) 0%, #E9EEFF 100%)',
			}}
		>
			<div className="space-y-4 divide-y divide-brand-300/20 rounded-xl bg-brand-100 p-6 shadow-lg">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold text-heading">Assets</h1>
					<Button className="flex flex-row items-center space-x-2 border px-2 text-brand-300 md:px-4">
						<FiltersIcon />
						<span className="hidden md:block">Filters</span>
					</Button>
				</div>
				<table className="w-full table-fixed divide-y divide-brand-300/20">
					<thead className="text-brand-300">
						<tr>
							<th scope="col" className="py-4 text-start">
								ID
							</th>
							<th scope="col">Asset</th>
							<th scope="col">Amount</th>
							<th scope="col" className="whitespace-nowrap">
								Request Status
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-brand-300/20">
						{assets?.map(asset => (
							<tr className="text-center" key={asset.id}>
								<td className="py-4 text-start">#{asset.id}</td>
								<td>{asset.asset}</td>
								<td>{asset.amount}</td>
								<td>
									<p
										className={`${
											asset.status === 'Sent'
												? 'border-[#B45309] bg-[#B45309]/10 text-[#B45309]'
												: 'border-[#15803D] bg-[#15803D]/10 text-[#15803D]'
										} m-auto max-w-max rounded-full border-2 p-1.5 py-0.5 text-xs`}
									>
										{asset.status}
									</p>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="flex flex-col items-center justify-between  space-y-4 py-4 lg:flex-row lg:space-y-0">
					<p className="text-brand-300">Showing 1 to 10 of 12 entries</p>
					<div className="flex flex-row space-x-2">
						<button className="rounded-full border p-3 px-5 text-brand-300">
							&lt;
						</button>
						<div className="hidden flex-row md:block">
							<button className="rounded-full border-[#384764] bg-[#384764] p-3 px-5 text-brand-100">
								1
							</button>
							<button className="rounded-full border p-3 px-5 text-brand-300">
								2
							</button>
							<button className="rounded-full border p-3 px-5 text-brand-300">
								3
							</button>
							<button className="rounded-full border p-3 px-5 text-brand-300">
								4
							</button>
						</div>
						<button className="rounded-full border p-3 px-5 text-brand-300">
							&gt;
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Assets;
