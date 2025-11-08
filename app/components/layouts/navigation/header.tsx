import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Form, Link, NavLink } from "react-router";
import MENU from "~/lib/menu";
import { cn } from "~/lib/utils";
import { useRootLoaderData } from "~/root";

export const Header = () => {
	const [expand, setExpand] = useState(false);

	const { credentials } = useRootLoaderData();

	return (
		<header className="pt-8 fixed inset-x-0 top-0 z-50 mx-6 overflow-x-clip 2xl:mx-0">
			<div className="flex items-center justify-between container mx-auto py-5 px-6 bg-white/60 rounded-2xl backdrop-blur-md lg:px-8">
				<div>
					<img
						src="/images/logo-dark.webp"
						alt="PyconID 2025"
						className="h-6 lg:h-12"
					/>
				</div>

				<div
					className={cn(
						"absolute top-20 rounded-2xl p-4 bg-white/75 backdrop-blur-md w-full transition-all duration-300",
						"md:w-1/3 lg:static lg:w-auto lg:p-0 lg:bg-transparent lg:backdrop-blur-none",
						expand ? "right-0" : "-right-[120%]",
					)}
				>
					<ul className="flex flex-col gap-2 text-gray-700 lg:flex-row lg:gap-4">
						{MENU.map((menu) => (
							<li key={menu.name}>
								<NavLink
									to={menu.href}
									className={({ isActive }) =>
										isActive ? "text-gray-950 font-medium" : ""
									}
								>
									{menu.name}
								</NavLink>
							</li>
						))}
						<li className="w-full lg:hidden">
							{/* <button
								type="button"
								disabled
								className="bg-secondary/75 text-background text-sm px-5 py-2.5 font-bold rounded-xl lg:text-base w-full"
							>
								Ticket Available Soon
							</button> */}

							{credentials ? (
								<div className="flex flex-col gap-2">
									<NavLink to="/auth/dashboard" className="mr-4">
										My Profile
									</NavLink>
									<Form action="/auth/logout" method="post">
										<button
											type="submit"
											className="bg-secondary text-background text-sm px-5 py-2.5 font-bold rounded-xl cursor-pointer lg:text-base"
										>
											Logout
										</button>
									</Form>
								</div>
							) : (
								<Link to="/login">
									<button
										type="button"
										className="bg-secondary text-background text-sm px-5 py-2.5 font-bold rounded-xl cursor-pointer lg:text-base"
									>
										Login
									</button>
								</Link>
							)}
						</li>
					</ul>
				</div>

				<div className="hidden lg:block">
					{/* <button
						type="button"
						disabled
						className="bg-secondary/75 text-background text-sm px-5 py-2.5 font-bold rounded-xl lg:text-base"
					>
						Ticket Available Soon
					</button> */}

					{credentials ? (
						<div className="flex gap-4">
							<NavLink
								to="/auth/dashboard"
								className="bg-secondary text-background text-sm px-5 py-2.5 font-bold rounded-xl cursor-pointer lg:text-base"
							>
								My Profile
							</NavLink>
							<Form action="/auth/logout" method="post">
								<button
									type="submit"
									className="bg-secondary text-background text-sm px-5 py-2.5 font-bold rounded-xl cursor-pointer lg:text-base"
								>
									Logout
								</button>
							</Form>
						</div>
					) : (
						<Link to="/login">
							<button
								type="button"
								className="bg-secondary text-background text-sm px-5 py-2.5 font-bold rounded-xl cursor-pointer lg:text-base"
							>
								Login
							</button>
						</Link>
					)}
				</div>

				<button
					type="button"
					className="lg:hidden"
					onClick={() => setExpand((prev) => !prev)}
				>
					{expand ? <XIcon /> : <MenuIcon />}
				</button>
			</div>
		</header>
	);
};
