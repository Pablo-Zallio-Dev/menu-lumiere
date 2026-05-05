"use client";
import React from 'react';

export type PriceProps = {
	price: string
}

const Price: React.FC<PriceProps>  = ({ price }) => {
	return (
		<p className=" font-inter font-medium text-colorTextNumber text-15px  "> {price}€ </p>
	);
};

export default Price;
