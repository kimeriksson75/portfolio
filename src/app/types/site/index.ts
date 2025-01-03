import type { SanityDocument } from "../sanity";

export type Site = SanityDocument<{
	_type: "site";
	title: string;
	description: string;
	logo: SanityDocument<{
		_type: "image";
		asset: {
			_ref: string;
		};
	}>;
	pages: Page[];
}>;
export type Page = SanityDocument<{
	_type: "page";
	slug: SanityDocument<{
		_type: "slug";
		current: string;
	}>;
	title: string;
	description: string;
	image: SanityDocument<{
		_type: "image";
		asset: {
			_ref: string;
		};
	}>;
	visibleInHeader: boolean;
	sections: Array<Section>;
}>;

export type Section = SanityDocument<{
	_type: "section";
	_key: string;
	name: string;
	content: Array<RichTextAndImage>;
}>;

export type Hero = SanityDocument<{
	_type: "Hero";
	name: string;
	content: SanityDocument<{
		_type: "richText";
		content: string;
	}>;
	numberOfColumns: 1 | 2;
	buttons: Array<{
		text: string;
		url: string;
		color: "default" | "transparent" | "white" | "red";
		size: "normal" | "large";
	}>;
	image?: SanityDocument<{
		_type: "image";
		asset: {
			_ref: string;
		};
	}>;
	imageAlt?: string;
	blobColor?: string;
	logosDescription?: string;
	logos?: Array<{
		text: string;
		url: string;
		logo: SanityDocument<{
			_type: "image";
			asset: {
				_ref: string;
			};
		}>;
	}>;
}>;

export type RichTextAndImage = SanityDocument<{
	_type: "RichTextAndImage";
	name: string;
	color: string;
	image: SanityDocument<{
		_type: "image";
		asset: {
			_ref: string;
		};
	}>;
	imageAlt: string;
	floatingImage: boolean;
	content: SanityDocument<{
		_type: "richText";
		content: string;
	}>;
	layout: "imageLeft" | "imageRight";
}>;

export type Blog = SanityDocument<{
	_type: "Blog";
	name: string;
	title: string;
	image: SanityDocument<{
		_type: "image";
		asset: {
			_ref: string;
		};
	}>;
	imageAlt: string;
	content: SanityDocument<{
		_type: "richText";
		content: string;
	}>;
	posts: BlogPost[];
	order: number;
}>;
export type BlogPosts = SanityDocument<{
	_type: "BlogPosts";
	posts: BlogPost[];
}>;
export type BlogPostItem = SanityDocument<{
	_type: "BlogPostItem";
	title: string;
	preamble: SanityDocument<{
		_type: "richText";
		content: string;
	}>;
	date: string;
	content: SanityDocument<{
		_type: "richText";
		content: string;
	}>;
	image: SanityDocument<{
		_type: "image";
		asset: {
			_ref: string;
		};
	}>;
	imageCaption: string;
}>;
export type BlogPost = SanityDocument<{
	_type: "BlogPost";
	title: string;
	preamble: SanityDocument<{
		_type: "richText";
		content: string;
	}>;
	date: string;
	content: SanityDocument<{
		_type: "richText";
		content: string;
	}>;
	image: SanityDocument<{
		_type: "image";
		asset: {
			_ref: string;
		};
	}>;
	imageAlt: string;
	imageCaption: string;
	tags: string[];
	_key: string;
}>;
