import { cls } from "../libs/client/utils";

interface LayoutProps {
	title?: string;
	canGoBack?: boolean;
	s;
	hasTabBar?: boolean;
	children: React.ReactNode;
}

export default function Layout({
	title,
	canGoBack,
	hasTabBar,
	children,
}: LayoutProps) {
	return (
		<div>
			<div className="bg-white max-w-xl w-full text-lg font-medium py-3 fixed text-gray-800 border-b top-0 justify-center flex items-center">
				{title ? <span>{title}</span> : null}
			</div>
			<div className={cls("pt-12", hasTabBar ? "pb-14" : "")}>{children}</div>
			{hasTabBar ? (
				<nav className="bg-white text-gray-800 border-t fixed bottom-0 pb-10 pt-3 flex justify-between items-center">
					<div className="flex flex-col items-center space-y-2">
						<span>홈</span>
					</div>
				</nav>
			) : null}
		</div>
	);
}
