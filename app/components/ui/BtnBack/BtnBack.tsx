"use client";
import { ArrowUp } from 'lucide-react';
import React from 'react';



const BtnBack: React.FC  = ({}) => {
	return (
            <section className=" flex w-max gap-3 py-2 px-4 rounded-full text-colorTextNumber border border-colorTextNumber text-10px tracking-widest uppercase ">
                  <ArrowUp size={14} color="#b8a47a" />
                  <a href='#home' className=' '> Volver arriba </a>
            </section>
	);
};

export default BtnBack;
