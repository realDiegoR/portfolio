'use client';

type HamburgerButtonProps = {
	toggleSidebar: () => void;
	isActive: boolean;
};

export const HamburgerButton = ({ isActive, toggleSidebar }: HamburgerButtonProps) => {
	const rotateStyles = isActive ? 'rotate-45 translate-y-1' : '';
	const invertedRotateStyles = isActive ? 'rotate-[-45deg] -translate-y-1.5' : '';

	return (
		<button
			type="button"
			title="Toggle Menu"
			className="fixed bottom-6 right-6 z-20 flex h-14 w-14 cursor-pointer flex-col items-center justify-center gap-2 rounded-full bg-quaternary shadow shadow-darkGray dark:bg-secondary md:hidden"
			onClick={toggleSidebar}
		>
			<span
				className={`h-0.5 w-7 rounded-full bg-gray-100 transition-transform duration-500 ease-in-out
           ${rotateStyles}`}
			></span>
			<span
				className={`h-0.5 w-7 rounded-full bg-gray-100 transition-transform duration-500 ease-in-out
          ${invertedRotateStyles}`}
			></span>
		</button>
	);
};
