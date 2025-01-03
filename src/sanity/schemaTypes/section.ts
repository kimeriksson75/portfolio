import type { SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		{
			type: "document",
			name: "section",
			title: "Section",
			fields: [
				{
					type: "string",
					name: "title",
					title: "Title",
				},
				{
					type: "string",
					name: "subtitle",
					title: "Subtitle",
				},
				{
					type: "array",
					name: "content",
					title: "Content",
					of: [{ type: "block" }],
				},
				{
					type: "image",
					name: "image",
					title: "Image",
				},
				{
					type: "string",
					name: "imageAlt",
					title: "Image Alt",
				},
			],
		},
	],
};
