"use client";
//import "./globals.css";
import "../app/globals.css";
import { Button, Input, Spacer, Switch } from "@nextui-org/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [emailFieldState, setEmailFieldState] = useState(false);

  const router = useRouter();

  function handleBackToSignInClick() {
    router.back();
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.error("email: %s", email);
    console.error("emailFieldState: ", emailFieldState);
    console.error("email valid: ", isEmailInvalid);
    setEmailFieldState(isEmailInvalid);
  }

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
    <div style={{ minHeight: "200px" }} className="flex items-center flex-col">
      <Spacer y={4} />
      <Button
        className="min-w-48 w-60 flex-auto"
        //type="submit"
        style={{
          font: "Arial",
          fontSize: "24px",
        }}
        onPress={() => {
          console.log("button press back to sign in ");
          handleBackToSignInClick();
        }}
      >
        Back to Sign-in
      </Button>
      <div className="flex flex-col items-center">
        <h1 style={{ fontSize: "calc(12px + 1.5vw)" }}>Sign-up</h1>
        <Spacer y={4} />
        <div
          style={{ minHeight: "200px" }}
          className="flex items-center flex-col"
        >
          <form className="flex items-center flex-col" onSubmit={handleSubmit}>
            <Input
              className="w-96"
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
                mainWrapper: ["w-full"],
              }}
            />
            <Spacer y={4} />
            <Button
              className="min-w-48 w-60 flex-auto"
              type="submit"
              style={{
                font: "Arial",
                fontSize: "24px",
              }}
              onPress={() => {
                console.log("button press sign out email: ", email);
                isEmailInvalid;
              }}
            >
              Sign-up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
  //return <h1>Welcome to the sign-up page!</h1>
}
