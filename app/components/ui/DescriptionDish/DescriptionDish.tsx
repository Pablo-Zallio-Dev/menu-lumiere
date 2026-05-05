"use client";
import React from 'react';

export type DescriptionDishProps = {
	description: string
}

const DescriptionDish: React.FC<DescriptionDishProps>  = ({ description }) => {
	return (
		<p className=" pr-8 mb-3 font-inter text-13px text-colorTextDescription "> {description} </p>
	);
};

export default DescriptionDish;
