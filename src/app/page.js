"use client";
import { NextUIProvider } from "@nextui-org/react";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";

function MinFontCalc({ pixelMin }, { percentChg }) {
  return "calc(" + { pixelMin } + "px + " + { percentChg } + "vw)";
}

function FrontPageHeader({ title }) {
  return <h1 style={{ fontSize: "calc(12px + 1.5vw)" }}>{title}</h1>;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [emailFieldState, setEmailFieldState] = useState(false);
  //const out = getStreamSomehow();
  //const err = getStreamSomehow();
  //const myConsole = new console.Console(out)

  async function handleSubmit(event) {
    event.preventDefault();
    console.error("email: %s", email);
    console.error("emailFieldState: ", emailFieldState);
    console.error("email valid: ", isEmailInvalid);
    setEmailFieldState(isEmailInvalid);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.error("email: %s", email);
  //   console.error("emailFieldState: ", emailFieldState);
  //   console.error("email valid: ", isEmailInvalid);
  //   setEmailFieldState(isEmailInvalid);
  //   // const result = await signIn('credentials', {
  //   //   redirect: false,
  //   //   email,
  //   //   password,
  //   // })
  //   // if (!result.error) {
  //   //   router.push('/')
  //   // }
  // };

  const validateEmail = (value) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isEmailInvalid = React.useMemo(() => {
    console.log("isEmailInvalid: ", email);
    if (email === "") {
      setEmailFieldState(false);
      return true;
    }

    if (validateEmail(email)) {
      setEmailFieldState(false);
      return false;
    } else {
      return true;
    }
  }, [email]);

  return (
    <NextUIProvider>
      <div className="flex min-h-screen flex-col items-center">
        <div style={{ marginTop: "5px + 1vh", marginBottom: "5px + 1vh" }}>
          <FrontPageHeader title="Dublin Food Pantry Volunteer Sign-In" />
        </div>

        <div
          style={{ minHeight: "200px" }}
          className="flex items-center flex-col"
        >
          <form className="flex items-center flex-col" onSubmit={handleSubmit}>
            <Input
              isClearable
              value={email}
              onValueChange={setEmail}
              onClear={() => console.log("email cleared")}
              placeholder="Enter your email"
              label="Email"
              labelPlacement="outside-left"
              color="default"
              size="lg"
              radius="sm"
              isInvalid={emailFieldState}
              errorMessage={emailFieldState && "Please enter a valid email"}
              classNames={{
                label: ["text-white/100", "text-xl"],
              }}
            />
            <Button
              className="self-center"
              type="submit"
              style={{
                marginBottom: "5px + 1vh",
                font: "Arial",
                fontSize: "24px",
                marginTop: "5px",
              }}
              onPress={() => {
                console.log("button press email: ", email);
                isEmailInvalid;
              }}
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </NextUIProvider>
  );
}
