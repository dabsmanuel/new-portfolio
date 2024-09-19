// icons
import {
	HiHome,
	HiUser,
	HiViewColumns,
	HiRectangleGroup,
	// HiChatBubbleBottomCenterText,
	HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
	{
		id: 1,
		name: "home",
		path: "/",
		icon: <HiHome />,
	},
	{
		id: 2,
		name: "about",
		path: "/about",
		icon: <HiUser />,
	},
	{
		id: 3,
		name: "services",
		path: "/services",
		icon: <HiRectangleGroup />,
	},
	{
		id: 4,
		name: "work",
		path: "/work",
		icon: <HiViewColumns />,
	},
	// {
	// 	id: 5,
	// 	name: "testimonials",
	// 	path: "/testimonial",
	// 	icon: <HiChatBubbleBottomCenterText />,
	// },
	{
		id: 5,
		name: "contact",
		path: "/contact",
		icon: <HiEnvelope />,
	},
];


export default navData;