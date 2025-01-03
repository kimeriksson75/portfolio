import { defineField, defineType } from "sanity";

export const richTextAndImage = defineType({
	title: "Text och bildkomponent",
	name: "RichTextAndImage",
	type: "document",
	fields: [
		defineField({
			title: "Namn",
			name: "name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Färg",
			name: "color",
			type: "string",
			description: "Välj en bakgrundsfärg.",
			options: {
				list: [
					{ title: "Vit", value: "#FFFFFF" },
					{ title: "Ljusgul", value: "#FFEFCE" },
					{ title: "Ljusgrön", value: "#D5EADD" },
					{ title: "Ljusgrå", value: "#FAF8F5" },
				],
			},
		}),
		defineField({
			title: "Bild",
			name: "image",
			type: "image",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Bildbeskrivning",
			name: "imageAlt",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Flödande bild",
			name: "floatingImage",
			type: "boolean",
			description: "Ska bilden flöda utanför?.",
			options: {
				layout: "checkbox",
			},
		}),
		defineField({
			title: "Brödtext",
			name: "content",
			type: "array",
			of: [{ type: "block" }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Layout",
			name: "layout",
			type: "string",
			description: "Välj en layout för text och bild.",
			options: {
				list: [
					{ title: "Bild till vänster", value: "imageLeft" },
					{ title: "Bild till höger", value: "imageRight" },
				],
			},
		}),
	],
});
