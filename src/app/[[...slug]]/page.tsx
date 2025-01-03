import { client } from "@/sanity/lib/client";
import { SITE_QUERY } from "@/sanity/lib/queries";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import styles from "../page.module.css";
import type { Page } from "../types/site";
import type * as types from "../types/site";

interface Params {
	slug: string;
}

export default async function Home({ params }: { params: Params }) {
	const site = await client.fetch(SITE_QUERY);
	const { slug } = await params;
	const pageData = site.pages.find(
		(page: Page) => page.slug.current === slug[0],
	);
	console.log({ pageData });

	return (
		<div className={styles.page}>
			<Header pages={site.pages} />
			<main className={styles.main}>
				{/* <div className={cx(classes.singleColumn, classes.sectionPadding)}>
					<h1>{pageData.title}</h1>{" "}
					{pageData?.description && (
						<PortableText value={pageData.description} />
					)}
				</div> */}
				{pageData?.sections?.map((section: types.Section) => (
					<Section key={section._key} {...section} />
				))}

				{/* <div className={styles.ctas}>
					<a
						className={styles.primary}
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							className={styles.logo}
							src="/vercel.svg"
							alt="Vercel logomark"
							width={20}
							height={20}
						/>
						Deploy now
					</a>
					<a
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.secondary}
					>
						Read our docs
					</a>
				</div> */}
			</main>
			{/* <footer className={styles.footer}>
				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer> */}
			<Footer pages={site.pages} />
		</div>
	);
}
