import { defineField, defineType } from "sanity";

export const vimeo = defineType({
	title: "Video",
	name: "Vimeo",
	type: "document",
	fields: [
		defineField({
			title: "Vimeo",
			name: "vimeo",
			type: "vimeo",
			// Optional: Extend the default fields, see below for more information
			options: {
				fields: ["metadata"],
			},
		}),
	],
});
