import { NavLink } from "react-router";
import MENU from "~/lib/menu";
import { cn } from "~/lib/utils";

export const Footer = ({ path }: { path: string }) => {
	return (
		<ul className="flex bg-[#162342] gap-x-2 justify-center bottom-5 fixed z-50 px-2 w-full lg:hidden">
			{MENU.map((menu) => {
				return (
					<li key={menu.name} className="text-center">
						<NavLink
							to={menu.href}
							className={cn(
								"font-sans text-md text-center",
								path === menu.href ? "text-[#F9F9F9]" : "text-[#F9F9F9]/50",
							)}
						>
							{menu.name}
						</NavLink>
					</li>
				);
			})}
		</ul>
	);
};
