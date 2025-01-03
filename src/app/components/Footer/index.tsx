import cx from "@/app/lib/utils/cx";
import styles from "../../styles/styles.module.scss";
import type { Page } from "../../types/site";

const Footer: React.FC<{ pages: Page[] }> = ({ pages }) => {
	return (
		<footer className={cx(styles.footer)}>
			<div className={styles.wrapper}>
				<nav className={styles.navigation}>
					<h4>Nav</h4>
					<ul>
						{pages.map((page) => (
							<li key={page.slug.current}>
								<a href={`/${page.slug.current}`}>{page.title}</a>
							</li>
						))}
					</ul>
				</nav>
				<p>© 2025 Kimestry aka KimIndustry</p>
			</div>
		</footer>
	);
};

export default Footer;
