"use client";
import React from 'react';

export type TitleCategoryProps = {
	text: string
}

const TitleCategory: React.FC<TitleCategoryProps>  = ({ text }) => {
	return (
		<h2 className=" font-garamond font-medium text-2xl leading-none "> {text} </h2>
	);
};

export default TitleCategory;
