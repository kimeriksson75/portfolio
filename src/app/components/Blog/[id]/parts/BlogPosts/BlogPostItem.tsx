import { useNextSanityImage } from "next-sanity-image";
import Img from "next/image";
import Link from "next/link";
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
	const imageProps = useNextSanityImage(sanityClient, image) || null;

	return (
		<Link href={`/blog/${urlSafe(title)}`} className={styles.blogPostsItem}>
			{title && <h1>{title}</h1>}
			{/* {preamble && (
				<div className={styles.preamble}>
					<PortableText value={preamble} />
				</div>
			)} */}
			{date && <p className={styles.date}>{date}</p>}
			{image && imageCaption && imageProps && (
				<Img
					src={`${imageProps.src}`}
					width={imageProps.width}
					height={imageProps.height}
					alt={imageCaption}
					// style={{ width: "100%", height: "auto" }} // layout="responsive" prior to Next 13.0.0
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
