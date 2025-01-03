// import Loading from "components/misc/Loading";
import { Suspense, lazy } from "react";
// import mainClasses from "../../styles/styles.module.scss";
import type * as types from "../../types/site";
const components = {
	RichTextAndImage: lazy(() => import("../RichTextAndImage")),
	Hero: lazy(() => import("../Hero")),
	Blog: lazy(() => import("../Blog/[id]")),
};
const Section: React.FC<types.Section> = (section: types.Section) => {
	const DynamicComponent = components[section._type as keyof typeof components];

	return (
		<Suspense>
			<DynamicComponent {...section} />
		</Suspense>
	);
};

export default Section;
