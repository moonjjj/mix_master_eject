"use client";

import React, { useState } from "react";
import { Switch } from "@nextui-org/react";
import { FireIcon, TimeIcon } from "./icons";

export default function Switchs() {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <div className="flex flex-col gap-2">
      <Switch
        isSelected={isSelected}
        onValueChange={setIsSelected}
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <TimeIcon color="#020202" />
          ) : (
            <FireIcon color="#ff6600" />
          )
        }
        size="lg"
      >
        {isSelected ? "최신순" : "인기순"}
      </Switch>
    </div>
  );
}

// defaultSelected
//       size="lg"
//       color="success"
//       startContent={<SunIcon />}
//       endContent={<MoonIcon />}
