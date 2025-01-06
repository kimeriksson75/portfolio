"use client";
import cx from "classnames";
import { useNextSanityImage } from "next-sanity-image";
import Img from "next/image";
import sanityClient from "../../lib/utils/sanityClient";
import styles from "../../styles/styles.module.scss";
import type * as types from "../../types/site";

const Image: React.FC<types.Image> = ({ image = null, imageCaption = "" }) => {
	const imageProps = useNextSanityImage(sanityClient, image) || null;

	return (
		<div>
			<div className={cx(styles.image)}>
				{image && imageCaption && imageProps && (
					<Img
						src={`${imageProps.src}`}
						width={imageProps.width}
						height={imageProps.height}
						alt={imageCaption}
						style={{ width: "100%", height: "auto" }} // layout="responsive" prior to Next 13.0.0
						sizes="(max-width: 800px) 100vw, 800px"
						placeholder="blur"
						blurDataURL={imageProps.src}
					/>
				)}
			</div>
			{imageCaption && <p className={styles.imageCaption}>{imageCaption}</p>}
		</div>
	);
};

export default Image;
