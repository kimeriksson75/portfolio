import { client } from "@/sanity/lib/client";
import { SITE_QUERY } from "@/sanity/lib/queries";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import styles from "../page.module.css";
import type { Page } from "../types/site";
import type * as types from "../types/site";

export default async function Home({
	params,
}: { params: Promise<{ slug: string }> }) {
	const site = await client.fetch(SITE_QUERY);
	const slug = (await params)?.slug ?? ["home"];
	const pageData = site.pages.find(
		(page: Page) => page.slug.current === slug[0],
	);

	return (
		<div className={styles.page}>
			<Header pages={site.pages} />
			<main className={styles.main}>
				{pageData?.sections?.map((section: types.Section) => (
					<Section key={section._key} {...section} />
				))}
			</main>
			<Footer pages={site.pages} />
		</div>
	);
}
