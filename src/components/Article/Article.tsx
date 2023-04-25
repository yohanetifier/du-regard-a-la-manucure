import React from "react";

type Props = {
	title: string;
	content: string;
};

const Article = ({ title, content }: Props) => {
	return (
		<div>
			<h2>{title}</h2>
			<p>{content} </p>
		</div>
	);
};

export default Article;
