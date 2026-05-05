"use client";
import React from 'react';

export type NumberCategoryProps = {
	number: string
}

const NumberCategory: React.FC<NumberCategoryProps>  = ({number}) => {
	return (
		<p className=" font-inter text-10px text-colorTextNumber tracking-3     "> {number} </p>
	);
};

export default NumberCategory;
