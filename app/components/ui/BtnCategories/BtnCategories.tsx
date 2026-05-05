"use client";
import React from 'react';

export type BtnCategoriesProps = {
	text: string
}

const BtnCategories: React.FC<BtnCategoriesProps>  = ({ text }) => {
	return (
		<button className=" py-2 px-4 rounded-full font-inter font-medium text-13px text-colorTextCategory  bg-bgBtnCategories ">
                  {text}
            </button>
	);
};

export default BtnCategories;
