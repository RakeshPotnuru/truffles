import type { FC } from 'react';

import { Assets, Sidebar } from './components';

type Asset = {
	id: number;
	asset: string;
	amount: number;
	status: string;
};

interface IProps {
	assets: Asset[];
}

const Dashboard: FC<IProps> = ({ assets }) => {
	return (
		<div className="flex flex-row">
			<Sidebar />
			<Assets assets={assets} />
		</div>
	);
};

export default Dashboard;
