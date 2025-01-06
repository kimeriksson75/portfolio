import type { SchemaTypeDefinition } from "sanity";
import { blog } from "./blog/blog";
import { blogPost } from "./blog/blogPost";
import { hero } from "./hero";
import { image } from "./image";
import { pageType } from "./page";
import { richText } from "./richText";
import { richTextAndImage } from "./richTextAndImage";
import { vimeo } from "./vimeo";

import { siteType } from "./site";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		siteType,
		pageType,
		richTextAndImage,
		hero,
		blog,
		blogPost,
		image,
		vimeo,
		richText,
	],
};
