"use client"
import {NextUIProvider} from "@nextui-org/react";
import { Button } from '@nextui-org/react'


function FrontPageHeader({title}){
  return(<h1>{title}</h1>)
}

export default function Home() {
  return (
    <NextUIProvider>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <FrontPageHeader title="Dublin Food Pantry Volunteer Sign-In"/>
    <Button>CLICK ME!!!!</Button>
    </main>
    </NextUIProvider>
  )
}
