"use client"


import Cards from './components/Card'

import Header from './components/Header'

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center justify-between p-24">
     

      <Header/>
        <Cards/> 
    </main>
  )
}
