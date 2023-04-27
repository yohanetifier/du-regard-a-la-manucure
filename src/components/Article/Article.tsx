import React from "react";

type Description = {
	content: string;
};
type Props = {
	title: string;
	text: Description[];
};

const Article = ({ title, text }: Props) => {
	return (
		<div>
			<h2>{title}</h2>
			{text.map(({ content }) => (
				<p>{content}</p>
			))}
		</div>
	);
};

export default Article;
