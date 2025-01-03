import { defineField, defineType } from "sanity";

export const blog = defineType({
	title: "Blog",
	name: "Blog",
	type: "document",
	fields: [
		defineField({
			title: "Name",
			name: "name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Title",
			name: "title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Blog brödtext!!!",
			name: "content",
			type: "array",
			of: [{ type: "block" }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Inlägg",
			name: "posts",
			type: "array",
			of: [
				{
					type: "BlogPost",
				},
			],
		}),
	],
});
