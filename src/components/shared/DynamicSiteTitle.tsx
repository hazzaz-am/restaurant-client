import { Helmet } from "react-helmet-async";

type DynamicTitleProps = {
	title: string;
	url?: string;
};

const DynamicSiteTitle = ({ title, url = "" }: DynamicTitleProps) => {
	return (
		<Helmet>
			<title>{title}</title>
			<link rel="canonical" href={url} />
		</Helmet>
	);
};
export default DynamicSiteTitle;
