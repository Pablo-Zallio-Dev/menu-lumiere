"use client";
import React from 'react';

export type DishNameProps = {
	dish: string
}

const DishName: React.FC<DishNameProps>  = ({dish}) => {
	return (
		<p className=" font-inter font-medium text- text-15px "> {dish} </p>
	);
};

export default DishName;
