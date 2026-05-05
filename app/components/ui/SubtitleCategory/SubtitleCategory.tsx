"use client";
import React from 'react';

export type SubtitleCategoryProps = {
	subtitle: string
}

const SubtitleCategory: React.FC<SubtitleCategoryProps>  = ({subtitle}) => {
	return (
		<p className=" font-inter italic text-10px text-colorTextDescription "> {subtitle} </p>
	);
};

export default SubtitleCategory;
