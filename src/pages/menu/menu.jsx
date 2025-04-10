import React from 'react'
import Drinkcard from '../../components/MenuSection/Drinkcard'
import { iceBlended } from '../../data/menu_information'
import { frappuccino } from '../../data/menu_information'
import { espresso } from '../../data/menu_information'
import Header from '../../components/Header/Header'

const menu = () => {
  return (
    <div>
      <Header title="Ice Blended" subtitle="This is the ice blended category. Let’s pick your favorite drink." />
      <Drinkcard items={iceBlended} />
      <Header title="Frappuccino" subtitle="This is the Frappuccino category. Let’s pick your favorite drink." />
      <Drinkcard items={frappuccino} />
      <Header title="Espresso" subtitle="This is the Espresso category. Let’s pick your favorite drink." />
      <Drinkcard items={espresso} />
    </div>
  )
}

export default menu
