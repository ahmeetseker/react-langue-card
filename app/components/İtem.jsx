"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const İtem = ({cards}) => {
    const [showLogo , setShowLogo] = useState(true)


  return (
    <div  onClick={() => setShowLogo(!showLogo)}>

    <Card className="p-4 cursor-pointer">
    {showLogo ? (
        <div  className='space-y-4 flex flex-col  items-center'>
          <Image className="w-auto h-[70px]" src={cards.img} alt="logo" />
          <h3 className="card-title">{cards.name}</h3>
        </div>
      ) : (
        <ul className="list">
          {cards.options.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      )}

    </Card>
    
    </div>


  )
}

export default İtem