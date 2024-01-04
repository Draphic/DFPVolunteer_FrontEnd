"use client";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Button, Input, Spacer, RadioGroup, Radio } from "@nextui-org/react";
import React, { useState } from "react";
import Signinout from './views/Signinout'

function MinFontCalc({ pixelMin }, { percentChg }) {
  return "calc(" + { pixelMin } + "px + " + { percentChg } + "vw)";
}

function FrontPageHeader({ title }) {
  return <h1 style={{ fontSize: "calc(12px + 1.5vw)" }}>{title}</h1>;
}

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex min-h-screen flex-col items-center">
        <div style={{ marginTop: "5px + 1vh", marginBottom: "5px + 1vh" }}>
          <FrontPageHeader title="Dublin Food Pantry Volunteer Sign-In" />
        </div>
        <Spacer y={4}/>
        <Signinout/>
      </div>
    </NextUIProvider>
  );
}
