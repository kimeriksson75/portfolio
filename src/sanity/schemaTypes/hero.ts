import { defineField, defineType } from "sanity";

export const hero = defineType({
	title: "Hero",
	name: "Hero",
	type: "document",
	fields: [
		defineField({
			title: "Namn",
			name: "name",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Bild",
			name: "image",
			type: "image",
		}),
		defineField({
			title: "Blob färg",
			name: "blobColor",
			type: "string",
			description: "Välj en färg för blob i bakgrunden.",
			options: {
				list: [
					{ title: "Vit", value: "#FFFFFF" },
					{ title: "Ljusgul", value: "#FFEFCE" },
					{ title: "Ljusgrön", value: "#D5EADD" },
					{ title: "Mörkgrön", value: "#006A41" },
					{ title: "Ljusgrå", value: "#FAF8F5" },
					{ title: "Brun", value: "#997A66" },
				],
			},
		}),
		defineField({
			title: "Bildbeskrivning",
			name: "imageAlt",
			type: "string",
		}),
		defineField({
			title: "Hem brödtext",
			name: "content",
			type: "array",
			of: [{ type: "block" }],
			validation: (rule) => rule.required(),
		}),
		defineField({
			title: "Buttons",
			name: "buttons",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							title: "Text",
							name: "text",
							type: "string",
						},
						{
							title: "Url",
							name: "url",
							type: "string",
						},
						{
							title: "Färg",
							name: "color",
							type: "string",
							options: {
								list: [
									{ title: "Default", value: "default" },
									{ title: "Transparent", value: "transparent" },
									{ title: "Vit", value: "white" },
									{ title: "Röd", value: "red" },
								],
							},
						},
						{
							title: "Size",
							name: "size",
							type: "string",
							options: {
								list: [
									{ title: "Normal", value: "normal" },
									{ title: "Stor", value: "large" },
								],
							},
						},
					],
				},
			],
		}),
		defineField({
			title: "Beskrivning logotyper",
			name: "logosDescription",
			type: "string",
		}),
		defineField({
			title: "Logotyper",
			name: "logos",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							title: "Text",
							name: "text",
							type: "string",
						},
						{
							title: "Url",
							name: "url",
							type: "string",
						},
						{
							title: "Logo",
							name: "logo",
							type: "image",
						},
					],
				},
			],
		}),
	],
});
