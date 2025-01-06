"use client";
import { PortableText } from "@portabletext/react";
import cx from "classnames";
import { useParams } from "next/navigation";
import urlSafe from "../../../lib/utils/urlSafe";
import styles from "../../../styles/styles.module.scss";
import type * as types from "../../../types/site";
import BlogPost from "./parts/BlogPost";
import BlogPosts from "./parts/BlogPosts";

const Blog: React.FC<types.Blog> = ({ title, content, posts }) => {
	const params = useParams<{ slug: string[] }>();
	const id = params?.slug?.[1] ?? "";

	const generateBlogPostsData = (): types.BlogPost[] => {
		if (!posts || posts?.length < 1) return [];
		if (id) {
			return posts
				.filter((item) => item?.tags.map((tag) => urlSafe(tag)).includes(id))
				.map((item) => ({
					...item,
					image: item?.image ?? null,
					preamble: item?.preamble ?? [],
					content: item?.content ?? [],
					tags: item?.tags,
				}));
		}
		return posts.map((item) => ({
			...item,
			image: item?.image ?? null,
			preamble: item?.preamble ?? [],
			content: item?.content ?? [],
			tags: item?.tags,
		}));
	};

	const generateBlogPostData = (): types.BlogPost => {
		const blogPost = posts.find((n) => urlSafe(n.title) === id);
		if (!blogPost) return {} as types.BlogPost;

		return {
			...blogPost,
			image: blogPost?.image ?? null,
			preamble: blogPost?.preamble ?? "",
			content: blogPost?.content ?? "",
			tags: blogPost?.tags,
		};
	};

	const isBlogPost = posts.find((b) => urlSafe(b.title) === id);

	return (
		<section
			className={cx(
				styles.content,
				styles.fullWidth,
				styles.alignCenter,
				styles.singleColumn,
				styles.sectionPadding,
				styles.flexDirectionColumn,
				styles.blog,
			)}
		>
			{id && isBlogPost ? (
				<BlogPost {...generateBlogPostData()} />
			) : (
				<>
					<h1>{title}</h1>
					{content && <PortableText value={content} />}
					<BlogPosts posts={generateBlogPostsData() as types.BlogPost[]} />
				</>
			)}
		</section>
	);
};

export default Blog;
