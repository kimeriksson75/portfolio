"use client";

import cx from "@/app/lib/utils/cx";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/styles.module.scss";
import type { Page } from "../../types/site";
import Burger from "./parts/Burger";
const Header: React.FC<{ pages: Page[] }> = ({ pages }) => {
	const [open, setOpen] = useState(false);
	console.log({ open });

	const [sticky, toggleSticky] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY <= 0) {
				toggleSticky(false);
			} else {
				toggleSticky(true);
			}
		};
		window.addEventListener("scroll", handleScroll, {
			passive: true,
			capture: true,
		});

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header className={cx(styles.header, sticky && styles.sticky)}>
			<div className={styles.wrapper}>
				<Burger open={open} setOpen={setOpen} />
				<nav className={cx(styles.navigation, open && styles.open)}>
					<ul>
						{pages.map((page) => (
							<li key={page.slug.current}>
								<Link
									href={`/${page.slug.current}`}
									onClick={() => setOpen(false)}
								>
									{page.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
