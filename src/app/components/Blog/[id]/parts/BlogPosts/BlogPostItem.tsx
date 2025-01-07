import { useNextSanityImage } from "next-sanity-image";
import Img from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import sanityClient from "../../../../../lib/utils/sanityClient";
import urlSafe from "../../../../../lib/utils/urlSafe";
import styles from "../../../../../styles/styles.module.scss";
import type * as types from "../../../../../types/site";

const BlogPostItem: React.FC<types.BlogPost> = ({
	title,
	date,
	image,
	imageCaption,
}) => {
	const params = useParams<{ slug: string[] }>();
	const slug = params?.slug?.[0] ?? "";
	const imageProps = useNextSanityImage(sanityClient, image) || null;

	return (
		<Link href={`/${slug}/${urlSafe(title)}`} className={styles.blogPostsItem}>
			{title && <h1>{title}</h1>}
			{date && <p className={styles.date}>{date}</p>}
			{image && imageCaption && imageProps && (
				<Img
					src={`${imageProps.src}`}
					width={imageProps.width}
					height={imageProps.height}
					alt={imageCaption}
					sizes="(max-width: 800px) 100vw, 800px"
					placeholder="blur"
					blurDataURL={imageProps.src}
				/>
			)}
			{imageCaption && <p className={styles.imageCaption}>{imageCaption}</p>}
			<div className={styles.horizontalLine} />
		</Link>
	);
};

export default BlogPostItem;
