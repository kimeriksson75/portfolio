import { createClient } from "@sanity/client";
import type { SanityClient } from "@sanity/client";

const sanityClient: SanityClient = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	useCdn: true,
	apiVersion: "2021-03-25",
});

export default sanityClient;
