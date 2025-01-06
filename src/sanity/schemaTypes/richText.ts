import { defineField, defineType } from "sanity";

export const richText = defineType({
	title: "Text",
	name: "RichText",
	type: "document",
	fields: [
		defineField({
			title: "Text",
			name: "content",
			type: "array",
			of: [{ type: "block" }],
			validation: (rule) => rule.required(),
		}),
	],
});
