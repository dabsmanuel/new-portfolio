// components/BlogCard.js
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt } from "react-icons/fa";


export default function BlogCard({ title, image, stack }) {
	return (
		<div className="">
			<Image
				src={"https:" + image.fields.file.url}
				alt={title}
				width={image.fields.file.details.image.width}
				height={image.fields.file.details.image.height}
				className=""
			/>
			<div className="">
				<p className="">{title}</p>
				<p className="">{stack}</p>
				<div className=""></div>
			</div>
		</div>
	);
}
