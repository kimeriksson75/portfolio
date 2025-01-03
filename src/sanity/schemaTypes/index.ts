import type { SchemaTypeDefinition } from "sanity";
import { blog } from "./blog/blog";
import { blogPost } from "./blog/blogPost";
import { hero } from "./hero";
import { pageType } from "./page";
import { richTextAndImage } from "./richTextAndImage";

import { siteType } from "./site";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [siteType, pageType, richTextAndImage, hero, blog, blogPost],
};
