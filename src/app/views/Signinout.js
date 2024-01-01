'use client'
import { Button, Input, Spacer, RadioGroup, Radio } from "@nextui-org/react";
import React, { useState } from "react";

export default function Signinout() {

  const [email, setEmail] = useState("");
  const [emailFieldState, setEmailFieldState] = useState(false);

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
            mainWrapper: ["w-full"]
          }}
        />
        <RadioGroup label="Time" defaultValue="currentTime">
          <Radio value="currentTime">Use the current time</Radio>
          <Radio value="customTime">Enter time myself</Radio>
        </RadioGroup>
        <div className="w-96 flex flex-row">
          <Button
            className="min-w-48 w-60 flex-auto"
            type="submit"
            style={{
              marginBottom: "5px + 1vh",
              font: "Arial",
              fontSize: "24px",
              marginTop: "5px",
            }}
            onPress={() => {
              console.log("button press sign in email: ", email);
              isEmailInvalid;
            }}
          >
            Sign-in
          </Button>
          <Spacer x={4} />
          <Button
            className="min-w-48 w-60 flex-auto"
            type="submit"
            style={{
              marginBottom: "5px + 1vh",
              font: "Arial",
              fontSize: "24px",
              marginTop: "5px",
            }}
            onPress={() => {
              console.log("button press sign out email: ", email);
              isEmailInvalid;
            }}
          >
            Sign-out
          </Button>
        </div>
      </form>
    </div>
  );
}