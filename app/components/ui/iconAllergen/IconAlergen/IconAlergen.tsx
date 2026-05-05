"use client";
import { LucideIcon, Fish, Nut, Milk, Wheat, Shell } from 'lucide-react';
import React from 'react';

const ICONS: Record<string, LucideIcon> = {
  fish: Fish,
  nuts: Nut,
  dairy: Milk,
  gluten: Wheat,
  molluscs: Shell,
};

export type IconAlergenProps = {
      alergen: string,
      iconId: string,
      color?: string,
      size?: number
}

const IconAlergen: React.FC<IconAlergenProps> = ({ iconId, alergen, color='#8a7a55', size= 12 }) => {

      const Icon = ICONS[iconId as keyof typeof ICONS];


      return (
            <>
                  <section className=" flex flex-col items-center w-max  ">

                        <section className=" flex justify-center items-center w-6 h-6 rounded-full bg-bgIconAllergen ">
                              <Icon color={color} size={size}/>
                        </section>
                        <p className=" w-max text-center text-colorTextCategory text-10px font-semibold   ">
                              {alergen}
                        </p>
                  </section>
            </>
      );
};

export default IconAlergen;
