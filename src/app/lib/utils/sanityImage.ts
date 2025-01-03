import type { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default function sanityImage(
	source: SanityImageSource,
	client: SanityClient,
): ImageUrlBuilder {
	const builder = imageUrlBuilder(client);

	try {
		return builder.image(source);
	} catch {
		return {
			url: () => "",
		} as ImageUrlBuilder;
	}
}
