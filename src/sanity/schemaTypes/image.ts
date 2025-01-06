import { defineField, defineType } from "sanity";

export const image = defineType({
	title: "Bild",
	name: "Image",
	type: "document",
	fields: [
		defineField({
			type: "image",
			name: "image",
			title: "Bild",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Bildbeskrivning",
			name: "imageCaption",
			type: "string",
			validation: (rule) => rule.required(),
		}),
	],
});
