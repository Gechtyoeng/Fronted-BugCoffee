import React from 'react';
import Drinkcard from '../../components/MenuSection/Drinkcard';
import { iceBlended } from '../../data/menu_information';
import { frappuccino } from '../../data/menu_information';
import { espresso } from '../../data/menu_information';
import Header from '../../components/Header/Header';
import TopDrinkCard from '../../components/MenuSection/TopDrinkCard';


const menu = () => {
  return (
    <div>
      <Header title="Top Drinks" subtitle="Explore the recent most bought drinks this week." />
      <TopDrinkCard 
        image="/matcha.png" 
        drinkName="Coffee Matcha" 
        description="Blends bold espresso with smooth matcha for a rich, balanced drink." 
      />
      <TopDrinkCard 
        image="/esspresso.png" 
        drinkName="Espresso" 
        description="Blends smooth, diluted espresso with a bold yet mellow taste." 
      />
      <TopDrinkCard 
        image="/cappucino.png" 
        drinkName="Cappucino" 
        description="rich espresso drink with steamed milk and thick foam layer." 
      />
      <Header title="Ice Blended" subtitle="This is the ice blended category. Let’s pick your favorite drink." />
      <Drinkcard items={iceBlended} />
      <Header title="Frappuccino" subtitle="This is the Frappuccino category. Let’s pick your favorite drink." />
      <Drinkcard items={frappuccino} />
      <Header title="Espresso" subtitle="This is the Espresso category. Let’s pick your favorite drink." />
      <Drinkcard items={espresso} />
    </div>
  );
};

export default menu;