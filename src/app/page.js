"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

function MinFontCalc({ pixelMin }, { percentChg }) {
  return "calc(" + { pixelMin } + "px + " + { percentChg } + "vw)";
}

function FrontPageHeader({ title }) {
  return <h1 style={{ "font-size": "calc(12px + 1.5vw)" }}>{title}</h1>;
}

export default function Home() {
  const [email, setEmail] = useState("");
  //const out = getStreamSomehow();
  //const err = getStreamSomehow();
  //const myConsole = new console.Console(out)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.error("email: %s", email);
    // const result = await signIn('credentials', {
    //   redirect: false,
    //   email,
    //   password,
    // })
    // if (!result.error) {
    //   router.push('/')
    // }
  };

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isEmailInvalid = React.useMemo(() => {
    if (email === "") return false;

    return validateEmail(email) ? false : true;
  }, [email]);

  return (
    <NextUIProvider>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <div
          style={{ "margin-top": "5px + 1vh", "margin-bottom": "5px + 1vh" }}
        >
          <FrontPageHeader title="Dublin Food Pantry Volunteer Sign-In" />
        </div>

        <div style={{ "min-height": "200px" }}>
          <form onSubmit={handleSubmit}>
            <Input
              isRequired
              isClearable
              type="email"
              value={email}
              onValueChange={setEmail}
              onClear={() => console.log("email cleared")}
              placeholder="Enter your email"
              label="Email"
              labelPlacement="outside-left"
              color="default"
              size="lg"
              radius="sm"
              isInvalid={isEmailInvalid}
              errorMessage={isEmailInvalid && "Please enter a valid email"}
              classNames={{
                label: ["text-black/90", "text-4xl"],
              }}
            />
            <div align="center" style={{ "margin-top": "5px" }}>
              <Button
                type="submit"
                style={{
                  "margin-bottom": "5px + 1vh",
                  font: "Arial",
                  "font-size": "24px",
                }}
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </NextUIProvider>
  );
}
