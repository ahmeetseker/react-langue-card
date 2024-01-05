"use client"

import React from 'react'
import Item from "@/app/components/İtem"
import {
    Card,
    CardDescription,CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { languages } from '../constants/data'

const Cards = () => {



  return (
   <Card className="px-16 pb-8">

   
    <CardTitle className="flex justify-center p-4">Languages</CardTitle>

    <CardDescription className="grid grid-cols-2	 gap-4">
    { languages.map((item , index)=> {

        return <Item cards={item} /> 
    })   }
    
    </CardDescription>
   </Card>
  )
}

export default Cards