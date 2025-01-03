import { defineField, defineType } from "sanity";

export const siteType = defineType({
	name: "site",
	title: "Site",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "description",
			type: "text",
		}),
		defineField({
			name: "logo",
			type: "image",
		}),
		defineField({
			name: "pages",
			type: "array",
			of: [{ type: "page" }],
		}),
	],
});
