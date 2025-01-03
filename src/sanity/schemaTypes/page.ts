import { defineField, defineType } from "sanity";

export const pageType = defineType({
	name: "page",
	title: "Page",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: { source: "title" },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "publishedAt",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "image",
			type: "image",
		}),
		defineField({
			name: "imageAlt",
			type: "string",
		}),
		defineField({
			name: "description",
			type: "array",
			of: [{ type: "block" }],
		}),
		defineField({
			name: "sections",
			type: "array",
			of: [{ type: "RichTextAndImage" }, { type: "Hero" }, { type: "Blog" }],
		}),
	],
});
