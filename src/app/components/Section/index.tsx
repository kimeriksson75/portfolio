import dynamic from "next/dynamic";
// import Loading from "components/misc/Loading";
import { Suspense } from "react";
// import mainClasses from "../../styles/styles.module.scss";
import type * as types from "../../types/site";

const components = {
	RichTextAndImage: dynamic(() => import("../RichTextAndImage")),
	Hero: dynamic(() => import("../Hero")),
	Blog: dynamic(() => import("../Blog/[id]")),
	Vimeo: dynamic(() => import("../Vimeo")),
	RichText: dynamic(() => import("../RichText")),
	Image: dynamic(() => import("../Image")),
};
const Section: React.FC<types.Section> = (section: types.Section) => {
	const DynamicComponent = components[
		section._type as keyof typeof components
	] as unknown as React.FC<types.Section>;

	return (
		<Suspense>
			<DynamicComponent {...(section as types.Section)} />
		</Suspense>
	);
};

export default Section;
