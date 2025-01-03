// create a and export a method that will make string safe for url, including only latin characters and replacing spaces with dashes
export default function urlSafe(str: string): string {
	return str
		.normalize("NFD")
		.replace(/\p{M}/gu, "")
		.replace(/[^a-zA-Z0-9]/g, "-")
		.toLowerCase();
}
