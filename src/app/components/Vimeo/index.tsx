"use client";
import cx from "classnames";
import VimeoDefaultPlayer from "../../lib/utils/VimeoDefaultPlayer";
import styles from "../../styles/styles.module.scss";
import type * as types from "../../types/site";
const Vimeo: React.FC<types.Vimeo> = ({ vimeo }) => {
	const id = vimeo?.id;
	return (
		<div
			className={cx(
				styles.singleColumn,
				styles.sectionPadding,
				styles.alignCenter,
			)}
		>
			<div className={cx(styles.vimeo)}>
				{id && (
					<VimeoDefaultPlayer
						id={id}
						loop={false}
						autoPlay={false}
						width={1440}
						height={960}
					/>
				)}
			</div>
		</div>
	);
};

export default Vimeo;
