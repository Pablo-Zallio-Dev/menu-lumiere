import data from '@/data/data.json'

//import { MenuHeader } from "./components/ui/MenuHeader";
import { NumberCategory } from './components/ui/NumberCategory';
import { TitleCategory } from './components/ui/TitleCategory';
import { SubtitleCategory } from './components/ui/SubtitleCategory';
import { MenuData } from '@/data/types';
import { DishName } from './components/ui/DishName';
import { Price } from './components/ui/Price';
import { LinksMenu } from './components/ui/LinksMenu';
import { BtnBack } from './components/ui/BtnBack';
import { DescriptionDish } from './components/ui/DescriptionDish';
import { IconAlergen } from './components/ui/iconAllergen/IconAlergen';

const menuData = data as MenuData;
export default function Home() {
      return (
            <>
                  <section id='home' className="  flex flex-col justify-center items-center pb-18 ">
                        
                        <LinksMenu />
                        <section className=" flex flex-wrap justify-center gap-2 ">

                        </section>
                        <section className=" w-full max-w-115 px-6 pt-12">
                              {
                                    menuData.categories.map((category) => (
                                          <>

                                                <section id={category.id} key={category.id} className=" py-4 ">
                                                      <section className="flex items-end gap-3 pb-1.5 mb-1">
                                                            <NumberCategory number={category.number} />
                                                            <TitleCategory text={category.name} />
                                                      </section>
                                                      <SubtitleCategory subtitle={category.subtitle} />
                                                </section>
                                                <section className="">
                                                      {category.dishes.map((dish) => (
                                                            <section key={dish.id} className=" flex flex-col py-5 border-b border-colorTextNumber/20 ">
                                                                  <section className=" flex justify-between pb-2 ">
                                                                        <DishName dish={dish.name} />
                                                                        <Price price={dish.price} />
                                                                  </section>
                                                                        <DescriptionDish description={dish.description} />
                                                                        <section className=" flex gap-3 ">
                                                                              {
                                                                                    dish.allergens.map((alergens) => (
                                                                                          <IconAlergen key={alergens.id} alergen={alergens.name} iconId={alergens.id} />
                                                                                    ))
                                                                              }
                                                                        </section>
                                                            </section>
                                                      ))}
                                                      <section className=" py-8 ">
                                                            <BtnBack />
                                                      </section>
                                                </section>
                                          </>
                                    ))
                              }
                              <section className=" flex flex-col justify-center items-center gap-6 ">
                                    <p className=" tracking-widest font-semibold text-10px text-colorTextDescription/80 uppercase ">Innovación · Respeto · Sabor</p>
                                    <section className=" flex flex-col items-center gap-1 pt-6 pb-10 text-10px font-inter text-colorTextDescription ">
                                          <p className=" font-bold ">Restaurante Lumiere</p>
                                          <p className="">Calle San Andres, Nº 20, Valencia</p>
                                          <section className=" flex gap-2 ">
                                          <p className="">Tel: 96 658 64 62</p>
                                          <p className="">-</p>
                                          <p className="">www.lumiere.es</p>
                                          </section>
                                    </section>
                              </section>
                        </section>
                  </section>



            </>
      );
}
