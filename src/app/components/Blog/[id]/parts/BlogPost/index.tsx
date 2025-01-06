/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from "@portabletext/react";
import { useNextSanityImage } from "next-sanity-image";
import Img from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Suspense, lazy } from "react";
import sanityClient from "../../../../../lib/utils/sanityClient";
import urlSafe from "../../../../../lib/utils/urlSafe";
import styles from "../../../../../styles/styles.module.scss";
import type * as types from "../../../../../types/site";

const components: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[key: string]: React.LazyExoticComponent<React.ComponentType<any>>;
} = {
	Image: lazy(() => import("../../../../Image")),
	RichText: lazy(() => import("../../../../RichText")),
	Vimeo: lazy(() => import("../../../../Vimeo")),
};
const BlogPost: React.FC<types.BlogPost> = ({
	title,
	preamble,
	date,
	content,
	image,
	imageAlt,
	imageCaption,
	additionalContent,
	tags = [],
}) => {
	const tagUrl = (str: string) => urlSafe(str).toLowerCase().replace(/ /g, "-");
	const imageProps = useNextSanityImage(sanityClient, image) || null;
	const params = useParams<{ slug: string[] }>();
	const slug = params?.slug?.[0] ?? "";
	return (
		<article className={styles.blogPost}>
			{title && <h1>{title}</h1>}
			{preamble && (
				<div className={styles.preamble}>
					<PortableText value={preamble} />
				</div>
			)}
			{date && <p className={styles.date}>{date}</p>}
			{image && imageAlt && imageProps && (
				<Img
					src={`${imageProps.src}`}
					width={imageProps.width}
					height={imageProps.height}
					alt={imageAlt}
					style={{ width: "100%", height: "auto" }} // layout="responsive" prior to Next 13.0.0
					sizes="(max-width: 800px) 100vw, 800px"
					placeholder="blur"
					blurDataURL={imageProps.src}
				/>
			)}
			{imageCaption && <p className={styles.imageCaption}>{imageCaption}</p>}
			<div className={styles.horizontalLine} />
			<div className={styles.content}>
				{content && <PortableText value={content} />}
			</div>
			<div>
				{additionalContent?.length > 0 &&
					additionalContent.map(
						(
							block: types.RichText | types.Image | types.Vimeo,
							index: number,
						) => {
							const Block = components[block._type as keyof typeof components];
							return (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<Suspense key={index} fallback={<div>Loading...</div>}>
									<Block {...block} />
								</Suspense>
							);
						},
					)}
			</div>
			{tags && (
				<ul className={styles.tags}>
					{tags?.map((tag) => (
						<li key={tag}>
							<Link href={`/${slug}/${tagUrl(tag)}`}>{tag}</Link>
						</li>
					))}
				</ul>
			)}
			<div className={styles.horizontalLine} />

			<Link href={`/${slug}`}>Tillbaka</Link>
		</article>
	);
};

export default BlogPost;
