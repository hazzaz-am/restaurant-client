import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import OrderTab from "./OrderTab";
import { useParams } from "react-router";

const categoryList = ["salad", "pizza", "soup", "dessert", "drinks"];

const OrderCategory = () => {
	const { category } = useParams();
	const initialIndex = categoryList.indexOf(category ? category : "salad");
	const [tabIndex, setTabIndex] = useState(initialIndex);

	return (
		<div className="my-32 container mx-auto px-4 text-center">
			<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
				<TabList className="w-2/3 mx-auto font-bold flex flex-wrap justify-center">
					{categoryList.map((item) => (
						<Tab
							key={item}
							className="inline-block p-2 cursor-pointer focus:outline-none mr-2 uppercase"
							selectedClassName="border-b-2 border-[#BB8506] text-[#BB8506]"
						>
							{item}
						</Tab>
					))}
				</TabList>

				{categoryList.map((item) => (
					<TabPanel key={item}>
						<OrderTab category={item} />
					</TabPanel>
				))}
			</Tabs>
		</div>
	);
};
export default OrderCategory;
