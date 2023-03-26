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
			className="h-[90vh] w-[80%] overflow-y-auto p-16"
			style={{
				background:
					'linear-gradient(180deg, rgba(246, 247, 251, 0) 0%, #E9EEFF 100%)',
			}}
		>
			<div className="space-y-4 divide-y divide-brand-300/20 rounded-xl bg-brand-100 p-6 shadow-lg">
				<div className="flex items-center justify-between">
					<h1 className="text-2xl font-bold text-heading">Assets</h1>
					<Button className="flex flex-row items-center space-x-2 border px-3 text-brand-300">
						<FiltersIcon />
						<span>Filters</span>
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
							<th scope="col">Request Status</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-brand-300/20">
						{assets?.map(asset => (
							<tr className="text-center" key={asset.id}>
								<td className="py-4 text-start">#{asset.id}</td>
								<td>{asset.asset}</td>
								<td>{asset.amount}</td>
								<td>{asset.status}</td>
							</tr>
						))}
						{/* <tr className="text-center">
							<td className="py-4 text-start">#12034</td>
							<td>Bitcoin</td>
							<td>2389</td>
							<td>Sent</td>
						</tr>
						<tr className="text-center">
							<td className="py-4 text-start">#12034</td>
							<td>Bitcoin</td>
							<td>2389</td>
							<td>Accepted</td>
						</tr>
						<tr className="text-center">
							<td className="py-4 text-start">#12034</td>
							<td>Bitcoin</td>
							<td>2389</td>
							<td>Sent</td>
						</tr>
						<tr className="text-center">
							<td className="py-4 text-start">#12034</td>
							<td>Bitcoin</td>
							<td>2389</td>
							<td>Sent</td>
						</tr>
						<tr className="text-center">
							<td className="py-4 text-start">#12034</td>
							<td>Bitcoin</td>
							<td>2389</td>
							<td>Sent</td>
						</tr>
						<tr className="text-center">
							<td className="py-4 text-start">#12034</td>
							<td>Bitcoin</td>
							<td>2389</td>
							<td>Sent</td>
						</tr>
						<tr className="text-center">
							<td className="py-4 text-start">#12034</td>
							<td>Bitcoin</td>
							<td>2389</td>
							<td>Sent</td>
						</tr>
						<tr className="text-center">
							<td className="py-4 text-start">#12034</td>
							<td>Bitcoin</td>
							<td>2389</td>
							<td>Sent</td>
						</tr> */}
					</tbody>
				</table>
				<div className="flex flex-row items-center justify-between py-4">
					<p className="text-brand-300">Showing 1 to 10 of 12 entries</p>
					<div className="flex flex-row space-x-2">
						<Button className="rounded-full border px-3.5 text-brand-300">
							&lt;
						</Button>
						<Button className="rounded-full border px-3.5 text-brand-300">
							1
						</Button>
						<Button className="rounded-full border px-3.5 text-brand-300">
							2
						</Button>
						<Button className="rounded-full border px-3.5 text-brand-300">
							3
						</Button>
						<Button className="rounded-full border px-3.5 text-brand-300">
							4
						</Button>
						<Button className="rounded-full border px-3.5 text-brand-300">
							&gt;
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Assets;
