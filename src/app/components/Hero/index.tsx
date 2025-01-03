import { PortableText } from "@portabletext/react";
import cx from "classnames";
import { useNextSanityImage } from "next-sanity-image";
import Img from "next/image";
import Link from "next/link";
import sanityClient from "../../lib/utils/sanityClient";
import styles from "../../styles/styles.module.scss";
import type * as types from "../../types/site";

const Hero: React.FC<types.Hero> = ({
	content,
	image = null,
	imageAlt,
	buttons,
}) => {
	const imageProps = useNextSanityImage(sanityClient, image) || null;

	return (
		<>
			{image && imageAlt ? (
				<section
					className={cx(
						styles.fullHeight,
						styles.fullWidth,
						styles.heroV2,
						// styles.heroAuthenticated,
					)}
				>
					<div
						className={cx(
							styles.twoColumns,
							styles.content,
							styles.sectionPadding,
						)}
					>
						<div className={cx(styles.flexAlignVertical)}>
							{content && <PortableText value={content} />}
							{buttons && (
								<div className={styles.buttonGroup}>
									{buttons.map((button) => (
										<Link
											key={button.text}
											href={button.url}
											passHref={true}
											target="_blank"
										>
											{button.text}
										</Link>
									))}
								</div>
							)}
						</div>
						<div className={styles.imageContent}>
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
					</div>
				</section>
			) : (
				<section
					className={cx(
						styles.flexAlignCenterCenter,
						styles.fullHeight,
						styles.heroV1,
					)}
				>
					<div className={styles.content}>
						{content && <PortableText value={content} />}
						{buttons && (
							<div className={styles.buttonGroup}>
								{buttons.map((button) => (
									<Link
										key={button.text}
										href={button.url}
										passHref={true}
										target="_blank"
									>
										{button.text}
									</Link>
								))}
							</div>
						)}
					</div>
				</section>
			)}
		</>
	);
};

export default Hero;
