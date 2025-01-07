import cx from "classnames";
import styles from "../../../../../styles/styles.module.scss";
import type * as types from "../../../../../types/site";
import BlogPostItem from "./BlogPostItem";

const BlogPosts: React.FC<{ posts: types.BlogPost[] }> = ({ posts }) => {
	return (
		<div className={cx(styles.threeColumns, styles.alignCenter)}>
			{posts
				.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
				.map((post: types.BlogPost) => (
					<BlogPostItem key={post._key} {...post} />
				))}
		</div>
	);
};

export default BlogPosts;
