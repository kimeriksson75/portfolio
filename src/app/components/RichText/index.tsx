"use client";
import { PortableText } from "@portabletext/react";
import cx from "classnames";
import styles from "../../styles/styles.module.scss";
import type * as types from "../../types/site";

const RichTextAndImage: React.FC<types.RichTextAndImage> = ({ content }) => {
	return (
		<div
			className={cx(
				styles.singleColumn,
				styles.sectionPadding,
				styles.alignCenter,
			)}
		>
			{content && <PortableText value={content} />}
		</div>
	);
};

export default RichTextAndImage;
