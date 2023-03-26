import { useState } from 'react';
import type { FC, MouseEventHandler } from 'react';

import {
	AssetsIcon,
	CardIcon,
	ChartIcon,
	QuestionIcon,
	SettingsIcon,
} from '@/assets/icons';

interface INavItem {
	name: string;
	Icon: any;
	activeItem: string;
	setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}

const NavItem: React.FC<INavItem> = ({
	name,
	Icon,
	activeItem,
	setActiveItem,
}) => {
	const [isActive, setIsActive] = useState(false);

	const handleMouseEnter: MouseEventHandler<HTMLLIElement> = () => {
		setIsActive(true);
	};

	const handleMouseLeave: MouseEventHandler<HTMLLIElement> = () => {
		setIsActive(false);
	};

	const handleClick: MouseEventHandler<HTMLLIElement> = () => {
		setActiveItem(name);
	};

	const activeStyle = activeItem === name ? 'bg-brand-50/20 text-brand-50' : '';

	return (
		<li
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
			className={`flex cursor-pointer flex-row items-center space-x-4 rounded-xl p-3 font-bold text-brand-300 hover:bg-brand-50/20 hover:text-brand-50 lg:p-4 ${activeStyle}`}
		>
			<Icon color={isActive || activeItem === name ? '#124BFB' : '#718096'} />
			<span className="hidden lg:block">{name}</span>
		</li>
	);
};

interface IProps {}

const Sidebar: FC<IProps> = () => {
	const [activeItem, setActiveItem] = useState('Assets');

	return (
		<div className="container mt-0.5 flex h-[90vh] w-[20%] flex-col justify-between bg-brand-100 py-8 px-4 md:w-[10%] lg:w-[20%] lg:px-6">
			<ul className="">
				<NavItem
					name="Assets"
					Icon={AssetsIcon}
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<NavItem
					name="Swap"
					Icon={CardIcon}
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<NavItem
					name="Send/Receive"
					Icon={ChartIcon}
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<NavItem
					name="Profile"
					Icon={ChartIcon}
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
			</ul>
			<ul className="">
				<NavItem
					name="Get Help"
					Icon={QuestionIcon}
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
				<NavItem
					name="Settings"
					Icon={SettingsIcon}
					activeItem={activeItem}
					setActiveItem={setActiveItem}
				/>
			</ul>
		</div>
	);
};

export default Sidebar;
