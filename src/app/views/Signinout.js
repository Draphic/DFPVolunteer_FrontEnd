"use client";
import {
  Button,
  Input,
  Spacer,
  RadioGroup,
  Radio,
  Switch,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function Signinout() {
  const [email, setEmail] = useState("");
  const [emailFieldState, setEmailFieldState] = useState(false);

  const [showCustomTime, setShowCustomTimeRadio] = useState(false);

  const [showCustomTimeSwitch, setShowCustomTimeSwitch] = useState(false);

  function handleTimeSwitchChange(value) {
    if (value === true) {
      setShowCustomTimeSwitch(false);
    } else {
      setShowCustomTimeSwitch(true);
    }
  }

  function handleTimeRadioChange(value) {
    if (value === "customTime") {
      setShowCustomTimeRadio(true);
    } else {
      setShowCustomTimeRadio(false);
    }
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
            mainWrapper: ["w-full"],
          }}
        />
        <Spacer y={4} />

        <Switch
          defaultSelected
          classNames={{
            label: ["text-white", "text-xl"],
          }}
          onValueChange={handleTimeSwitchChange}
        >
          Use the current time
        </Switch>

        <Spacer y={4} />

        {showCustomTimeSwitch && 
        <div className="flex items-center flex-row">
        <Input
          type="date"
          label="Date"
          labelPlacement="outside-left"
          color="default"
          size="lg"
          radius="sm"
          classNames={{
            label: ["text-white/100", "text-xl"],
            mainWrapper: ["w-full"],
          }}
        />
        <Spacer x={2}/>
        <Input
          type="time"
          label="Time"
          labelPlacement="outside-left"
          color="default"
          size="lg"
          radius="sm"
          classNames={{
            label: ["text-white/100", "text-xl"],
            mainWrapper: ["w-full"],
          }}
        />
        </div>
        }
        <Spacer y={4} />
        <RadioGroup
          label="Time for sign-in/out"
          defaultValue="currentTime"
          classNames={{
            label: ["text-white", "text-xl"],
          }}
          onChange={handleTimeRadioChange}
        >
          <Radio
            classNames={{
              label: ["text-white/100"],
            }}
            value="currentTime"
          >
            Use the current time
          </Radio>
          <Radio
            classNames={{
              label: ["text-white/100"],
            }}
            value="customTime"
          >
            Enter time myself
          </Radio>
        </RadioGroup>
        <Spacer y={4} />
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
