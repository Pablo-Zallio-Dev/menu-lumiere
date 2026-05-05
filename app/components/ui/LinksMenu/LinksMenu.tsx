"use client";
import React from 'react';
import menuData from '@/data/data.json' 
import { BtnCategories } from '../BtnCategories';




const LinksMenu: React.FC  = ({}) => {
	return (
		<section className=" flex flex-wrap justify-center gap-2 ">
                  {
                        menuData.categories.map((category)=> (
                              <section key={category.id} className="   gap-2 ">
                                    <a href={`#${category.id}`} > <BtnCategories text={category.name} /> </a>
                              </section>
                        ))
                  }
            </section>
	);
};

export default LinksMenu;

