import { defineField, defineType } from "sanity";

export const blogPost = defineType({
	title: "Inlägg",
	name: "BlogPost",
	type: "document",
	fields: [
		defineField({
			type: "string",
			name: "title",
			title: "Rubrik",
			initialValue: "Rubrik",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Ingress",
			name: "preamble",
			type: "array",
			of: [{ type: "block" }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			type: "date",
			name: "date",
			title: "Datum",
			initialValue: new Date().toISOString().split("T")[0],
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Innehåll",
			name: "content",
			type: "array",
			of: [{ type: "block" }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			type: "image",
			name: "image",
			title: "Bild",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Bildbeskrivning",
			name: "imageAlt",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			type: "string",
			name: "imageCaption",
			title: "Bildtext",
			description: "Visas under bilden",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Mer innehåll",
			name: "additionalContent",
			type: "array",
			of: [{ type: "Image" }, { type: "RichText" }, { type: "Vimeo" }],
		}),
		defineField({
			type: "array",
			name: "tags",
			title: "Taggar",
			of: [{ type: "string" }],
			validation: (rule) => rule.required(),
		}),
	],
});
