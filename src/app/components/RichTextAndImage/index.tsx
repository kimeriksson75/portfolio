"use client";
import { PortableText } from "@portabletext/react";
import cx from "classnames";
import { useNextSanityImage } from "next-sanity-image";
import Img from "next/image";
import { useRef } from "react";
import useInViewPort from "../../lib/hooks/useInViewPort";
import sanityClient from "../../lib/utils/sanityClient";
import styles from "../../styles/styles.module.scss";
import type * as types from "../../types/site";

const RichTextAndImage: React.FC<types.RichTextAndImage> = ({
	color,
	content,
	image = null,
	imageAlt = "",
	floatingImage = false,
	layout = "imageLeft",
}) => {
	const imageProps = useNextSanityImage(sanityClient, image) || null;
	console.log({ imageProps });
	const imageTargetRef = useRef<HTMLDivElement>(
		null,
	) as React.MutableRefObject<HTMLDivElement>;
	const textTargetRef = useRef<HTMLDivElement>(
		null,
	) as React.MutableRefObject<HTMLDivElement>;
	const isImageInViewport = useInViewPort(imageTargetRef, { threshold: 0.5 });
	const isTextInViewPort = useInViewPort(textTargetRef, { threshold: 0.5 });

	return (
		<section
			className={cx(styles.richTextAndImage)}
			style={{ backgroundColor: color }}
		>
			<div
				className={cx(
					styles.twoColumns,
					styles.sectionPadding,
					styles.alignCenter,
					floatingImage && styles.mediumHeight,
					layout === "imageRight" && styles.reverse,
				)}
			>
				<div
					ref={imageTargetRef}
					className={cx(
						floatingImage
							? layout === "imageLeft"
								? styles.overflowLeftImage
								: styles.overflowRightImage
							: "",
						styles.image,
						isImageInViewport && styles.fadeIn,
					)}
				>
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
				</div>
				<div
					ref={textTargetRef}
					className={cx(
						styles.content,
						styles.flexAlignVertical,
						isTextInViewPort && styles.fadeInText,
					)}
				>
					{content && <PortableText value={content} />}
				</div>
			</div>
		</section>
	);
};

export default RichTextAndImage;
